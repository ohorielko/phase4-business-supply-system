import React, { useEffect, useState } from "react";
import { getLocationView } from "../api";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

// create or replace view display_location_view as
// select
//     l.label,
// 	-- Show business or delivery service name if available
//     coalesce(b.long_name, ds.long_name) as name_at_location,

//     l.x_coord as x_coord,
//     l.y_coord as y_coord,

//      l.space as total_capacity,

//     -- Count of vans at the location
//     count(v.id) as number_of_vans,

//     -- Sorted list of van identifiers (concatenated by tag in ascending order)
//     group_concat(concat(v.id, v.tag) order by v.tag asc separator ', ') as van_identifiers,

//     -- Remaining space at the location (location space - total van capacity)
//     coalesce((l.space - count(v.id)), l.space) as remaining_space

// from
//     locations l
// left join
//     businesses b on l.label = b.location
// left join
//     delivery_services ds on l.label = ds.home_base
// left join
//     vans v on l.label = v.located_at
// group by
//     l.label, l.x_coord, l.y_coord, l.space, b.long_name, name_at_location
// having count(v.id) > 0;

const DisplayLocationView = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchLocationView = async () => {
      const { data } = await getLocationView();
      setLocations(data);
    };
    fetchLocationView();
  }, [setLocations]);

  return (
    <div style={{ margin: "50px 50px 0 50px" }}>
      <Table>
        <TableHead>
          <TableRow
            style={{ backgroundColor: "#10375C", borderCollapse: "collapse" }}
          >
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              label
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              name_at_location
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              x_coord
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              y_coord
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              total_capacity
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              number_of_vans
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              van_identifiers
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            >
              remaining_space
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map((location) => (
            <TableRow key={location.label}>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.label}
              </TableCell>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.name_at_location}
              </TableCell>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.x_coord}
              </TableCell>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.y_coord}
              </TableCell>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.total_capacity}
              </TableCell>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.number_of_vans}
              </TableCell>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.van_identifiers}
              </TableCell>
              <TableCell
                style={{ fontSize: "16px", border: "1px solid black" }}
              >
                {location.remaining_space}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DisplayLocationView;
