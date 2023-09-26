import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
} from "@nextui-org/react";

export default function CompletedJobs() {
  return (
    <div className="my-[2rem]">
      <h1 className="text-3xl font-bold text-center my-[1rem]">
        View Complaints
      </h1>
      <div className="flex flex-col gap-3">
        <Table
          aria-label="Example static collection table"
          className="min-h-[320px]"
        >
          <TableHeader>
            <TableColumn className="text-primary">Dept</TableColumn>
            <TableColumn className="text-primary">HOD</TableColumn>
            <TableColumn className="text-primary">Job Description</TableColumn>
            <TableColumn className="text-primary">Date of Request</TableColumn>
            <TableColumn className="text-primary">
              Nature of Request
            </TableColumn>
            <TableColumn className="text-primary">Estimated Cost</TableColumn>
            <TableColumn className="text-primary">Urgent/General</TableColumn>
            <TableColumn className="text-primary">Allocated </TableColumn>
            <TableColumn className="text-primary text-center">
              Status
            </TableColumn>

            <TableColumn className="text-primary">
              Date of Completion{" "}
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Eye</TableCell>
              <TableCell>Ali</TableCell>
              <TableCell>Beds</TableCell>
              <TableCell>29-07-23</TableCell>
              <TableCell>furniture</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>Urgent</TableCell>

              <TableCell>Ahmed</TableCell>
              <TableCell>
                <Chip
                  color="success"
                  className="capitalize text-white"
                  size="sm"
                >
                  Completed
                </Chip>
              </TableCell>
              <TableCell>29-07-23</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Dental</TableCell>
              <TableCell>Ali</TableCell>
              <TableCell>Beds</TableCell>
              <TableCell>29-07-23</TableCell>
              <TableCell>furniture</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>Urgent</TableCell>

              <TableCell>Ahmed</TableCell>
              <TableCell>
                {" "}
                <Chip
                  color="success"
                  className="capitalize text-white"
                  size="sm"
                >
                  Completed
                </Chip>
              </TableCell>
              <TableCell>28-09-23</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
