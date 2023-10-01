import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { getCompletedComplaints } from "../../../store/complaintReducer";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function CompletedJobs() {
  const dispatch = useDispatch();
  const { complaints, isLoading, error } = useSelector(
    (state) => state.complaint
  );

  useEffect(() => {
    dispatch(getCompletedComplaints());

    if (error) {
      toast.error(error);
    }
    () => {
      toast.dismiss();
    };
  }, [dispatch, error]);

  return (
    <div className="my-[2rem]">
      <h1 className="text-3xl font-bold text-center my-[1rem]">
        Completed Jobs
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
            {complaints.map((complaint, id) => (
              <TableRow key={id}>
                <TableCell>{complaint?.department}</TableCell>
                <TableCell>{complaint?.hod}</TableCell>
                <TableCell>{complaint?.jobDesc}</TableCell>
                <TableCell>
                  {new Date(complaint?.dateOfReq).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>{complaint?.natureOfJob}</TableCell>
                <TableCell>{complaint?.estimatedCost}</TableCell>
                <TableCell>{complaint?.urgency}</TableCell>

                <TableCell>{complaint?.allocatedTo}</TableCell>
                <TableCell>
                  <Chip
                    color="success"
                    className="capitalize text-white"
                    size="sm"
                  >
                    {complaint?.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  {new Date(complaint?.dateOfCompletion).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
