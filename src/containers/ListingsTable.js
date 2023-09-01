// ListingsTable.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";

const ListingsTable = () => {
  const { SearchBar } = Search;
  const [listings, setListings] = useState([]);
  const columns = [
    {
      dataField: "id",
      text: "Sr#",
      sort: true,
    },
    {
      dataField: "imageUrl",
      text: "Image",
      sort: true,
      formatter: (cellContent, row) => {
        return (
          <Link to={`/property/${row.id}`} style={{ textDecoration: "none" }}>
            <img
              style={{ width: "100px", height: "100px", borderRadius: 5 }}
              src={row?.imageUrl}
              alt="post"
            ></img>
            <p className="mt-2">Click me to see detail page</p>
          </Link>
        );
      },
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "address",
      text: "Address",
      sort: true,
    },
    {
      dataField: "beds",
      text: "Beds",
      sort: true,
    },
    {
      dataField: "bath",
      text: "Bath",
      sort: true,
    },
    {
      dataField: "coveredAreaSQFT",
      text: "Area",
      sort: true,
    },
    {
      dataField: "propertyType",
      text: "Type",
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },
  ];

  const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: listings.length,
      },
    ],
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/listings")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });
  }, []);

  return (
    <div>
      <ToolkitProvider keyField="id" data={listings} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar
              {...props.searchProps}
              className="custome-search-field mb-3"
              delay={1000}
              style={{ float: "right" }}
              placeholder="Filter table data"
            />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default ListingsTable;
