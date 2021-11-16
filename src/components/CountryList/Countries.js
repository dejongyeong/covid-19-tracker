/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import PropTypes, { number, string, func } from "prop-types";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import { Wrapper } from "./CountriesStyle";
import { calculateRate } from "../../helpers";

// Reference: https://codepen.io/huange/pen/rbqsD
function CountrySearch({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((term) => {
    setGlobalFilter(term || undefined);
  }, 200);

  return (
    <div className="search-bar">
      <div className="searchIcon">
        <FontAwesomeIcon icon={faSearch} size="sm" />
      </div>
      <input
        type="search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search Specific Country"
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
      );
    </div>
  );
}
CountrySearch.defaultProps = {
  globalFilter: undefined,
};
CountrySearch.propTypes = {
  globalFilter: string,
  setGlobalFilter: func.isRequired,
};

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 25 },
    },
    useGlobalFilter,
    usePagination
  );

  // <ReactTooltip type="info" effect="float">
  //
  //                     </ReactTooltip>

  return (
    <>
      <CountrySearch
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key } = headerGroup.getHeaderGroupProps();
            return (
              <tr key={key}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps()}
                    data-for={
                      headerGroup.headers[index].tooltip ? "data-tooltip" : null
                    }
                    data-tip={
                      headerGroup.headers[index].tooltip
                        ? `${headerGroup.headers[index].tooltip}`
                        : null
                    }
                  >
                    {column.render("Header")}
                    {headerGroup.headers[index].tooltip && (
                      <ReactTooltip
                        id="data-tooltip"
                        type="info"
                        effect="float"
                        className="custom-tooltip"
                        arrowColor="#33596d"
                      />
                    )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row) => {
            prepareRow(row);
            const { rowKey } = row.getRowProps();
            return (
              <tr key={rowKey} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const { dataKey } = cell.getCellProps();
                  return (
                    <td
                      key={dataKey}
                      {...cell.getCellProps([
                        { className: cell.column.className },
                      ])}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} /> First
        </button>
        <button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> Previous
        </button>
        <span className="page-info">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <FontAwesomeIcon icon={faAngleRight} /> Next
        </button>
        <button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} /> Last
        </button>
      </div>
    </>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: string,
      accessor: string,
      Cell: func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      countryCases: PropTypes.shape({
        updated: number,
        country: string,
        countryInfo: PropTypes.shape({
          _id: number,
          iso2: string,
          iso3: string,
          lat: number,
          long: number,
          flag: string,
        }),
        cases: number,
        todayCases: number,
        deaths: number,
        todayDeaths: number,
        recovered: number,
        todayRecovered: number,
        active: number,
        critical: number,
        casesPerOneMillion: number,
        deathsPerOneMillion: number,
        tests: number,
        testsPerOneMillion: number,
        population: number,
        continent: string,
        oneCasePerPeople: number,
        oneDeathPerPeople: number,
        oneTestPerPeople: number,
        activePerOneMillion: number,
        recoveredPerOneMillion: number,
        criticalPerOneMillion: number,
      }),
    })
  ).isRequired,
};

/** Design Idea: https://www.worldometers.info/coronavirus */
function Countries({ countryCases }) {
  const columns = useMemo(() => [
    {
      Header: "Country",
      accessor: "country",
      Cell: ({ row }) => {
        const data = row.original;
        return (
          <div className="country-info">
            <div className="country-img">
              <img
                src={data.countryInfo.flag}
                alt={data.country}
                width="31.25"
                height="18.75"
              />
            </div>
            <p>{data.country}</p>
          </div>
        );
      },
    },
    {
      Header: "Confirmed",
      accessor: "cases",
      Cell: (data) => data.value.toLocaleString(),
    },
    {
      Header: "New Cases",
      accessor: "todayCases",
      Cell: (data) => {
        return `+ ${data.value.toLocaleString()}`;
      },
      className: "todayCases",
    },
    {
      Header: "Recovered",
      accessor: "recovered",
      Cell: (data) => data.value.toLocaleString(),
    },
    {
      Header: "New Recovered",
      accessor: "todayRecovered",
      Cell: (data) => {
        return `+ ${data.value.toLocaleString()}`;
      },
      className: "todayRecover",
    },
    {
      Header: "Recovery Rate (%)",
      Cell: ({ row }) => {
        const data = row.original;
        const rate = calculateRate(data.recovered, data.cases);
        if (!Number.isFinite(rate)) {
          return "-";
        }
        return `${rate.toFixed(2)}`;
      },
      tooltip: "(Recovered / Total Cases) x 100%",
    },
    {
      Header: "Deaths",
      accessor: "deaths",
      Cell: (data) => data.value.toLocaleString(),
    },
    {
      Header: "New Deaths",
      accessor: "todayDeaths",
      Cell: (data) => {
        return `+ ${data.value.toLocaleString()}`;
      },
      className: "todayDeaths",
    },
    {
      Header: "Death Rate (%)",
      Cell: ({ row }) => {
        const data = row.original;
        const rate = calculateRate(data.deaths, data.cases);
        if (!Number.isFinite(rate)) {
          return "-";
        }
        return `${rate.toFixed(2)}`;
      },
      tooltip: "(Deaths / Total Cases) * 100%",
    },
    {
      Header: "Active Cases",
      accessor: "active",
      Cell: (data) => data.value.toLocaleString(),
      className: "active-case",
    },
    {
      Header: "Critical Cases",
      accessor: "critical",
      Cell: (data) => data.value.toLocaleString(),
      className: "critical-case",
    },
    {
      id: "positivityRate",
      Header: "Pos. Rate (%)",
      accessor: "tests",
      Cell: ({ row }) => {
        const data = row.original;
        const rate = calculateRate(data.cases, data.tests);
        if (!Number.isFinite(rate)) {
          return "-";
        }
        return `${rate.toFixed(2)}`;
      },
      tooltip: "(Confirmed Cases / Total Tests) * 100",
    },
    {
      Header: "Populations",
      accessor: "population",
      Cell: (data) => data.value.toLocaleString(),
    },
  ]);

  return (
    <Wrapper>
      <Table columns={columns} data={countryCases} />
    </Wrapper>
  );
}

Countries.propTypes = {
  countryCases: PropTypes.arrayOf(
    PropTypes.shape({
      countryCases: PropTypes.shape({
        updated: number,
        country: string,
        countryInfo: PropTypes.shape({
          _id: number,
          iso2: string,
          iso3: string,
          lat: number,
          long: number,
          flag: string,
        }),
        cases: number,
        todayCases: number,
        deaths: number,
        todayDeaths: number,
        recovered: number,
        todayRecovered: number,
        active: number,
        critical: number,
        casesPerOneMillion: number,
        deathsPerOneMillion: number,
        tests: number,
        testsPerOneMillion: number,
        population: number,
        continent: string,
        oneCasePerPeople: number,
        oneDeathPerPeople: number,
        oneTestPerPeople: number,
        activePerOneMillion: number,
        recoveredPerOneMillion: number,
        criticalPerOneMillion: number,
      }),
    })
  ).isRequired,
};

export default Countries;

// function Table({ columns, data }) {
//   const filterTypes = React.useMemo(
//     () => ({
//       // Add a new fuzzyTextFilterFn filter type.
//       fuzzyText: fuzzyTextFilterFn,
//       // Or, override the default text filter to use
//       // "startWith"
//       text: (rows, id, filterValue) => {
//         return rows.filter(row => {
//           const rowValue = row.values[id]
//           return rowValue !== undefined
//             ? String(rowValue)
//                 .toLowerCase()
//                 .startsWith(String(filterValue).toLowerCase())
//             : true
//         })
//       },
//     }),
//     []
//   )

//   const defaultColumn = React.useMemo(
//     () => ({
//       // Let's set up our default Filter UI
//       Filter: DefaultColumnFilter,
//     }),
//     []
//   )

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     state,
//     visibleColumns,
//     preGlobalFilteredRows,
//     setGlobalFilter,
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn, // Be sure to pass the defaultColumn option
//       filterTypes,
//     },
//     useFilters, // useFilters!
//     useGlobalFilter // useGlobalFilter!
//   )

//   // We don't want to render all of the rows for this example, so cap
//   // it for this use case
//   const firstPageRows = rows.slice(0, 10)

//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render('Header')}
//                   {/* Render the columns filter UI */}
//                   <div>{column.canFilter ? column.render('Filter') : null}</div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//           <tr>
//             <th
//               colSpan={visibleColumns.length}
//               style={{
//                 textAlign: 'left',
//               }}
//             >
//               <GlobalFilter
//                 preGlobalFilteredRows={preGlobalFilteredRows}
//                 globalFilter={state.globalFilter}
//                 setGlobalFilter={setGlobalFilter}
//               />
//             </th>
//           </tr>
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {firstPageRows.map((row, i) => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//       <br />
//       <div>Showing the first 20 results of {rows.length} rows</div>
//       <div>
//         <pre>
//           <code>{JSON.stringify(state.filters, null, 2)}</code>
//         </pre>
//       </div>
//     </>
//   )
// }
