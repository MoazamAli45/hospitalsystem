import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Spinner,
  Chip,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { getAllComplaints } from "../../../store/complaintReducer";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
export default function AllComplaints() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { complaints, isLoading, error } = useSelector(
    (state) => state.complaint
  );

  useEffect(() => {
    dispatch(getAllComplaints());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  return (
    <div className="my-[2rem]">
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="text-3xl font-bold text-center my-[1rem]">
        All Complaints
      </h1>
      <div className="flex flex-col gap-3">
        <Table
          aria-label="Example static collection table"
          className="min-h-[320px] lg:w-[110%] "
        >
          <TableHeader>
            <TableColumn className="text-primary">Sr</TableColumn>
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
            <TableColumn className="text-primary">View</TableColumn>
          </TableHeader>
          <TableBody
            isLoading={isLoading}
            loadingContent={<Spinner label="Loading..." />}
          >
            {complaints.map((complaint, id) => (
              <TableRow key={id}>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {id + 1}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {complaint?.department}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {complaint?.hod}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {complaint?.jobDesc}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {new Date(complaint?.dateOfReq).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {complaint?.natureOfJob}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {complaint?.estimatedCost}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {complaint?.urgency}
                </TableCell>

                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {complaint?.allocatedTo}
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  <Chip
                    color={`${
                      complaint?.status === "INPROGRESS"
                        ? "warning"
                        : complaint?.status === "COMPLETED"
                        ? "success"
                        : "danger"
                    }`}
                    className="capitalize text-white"
                    size="sm"
                  >
                    {complaint?.status}
                  </Chip>
                </TableCell>
                <TableCell
                  className={`${
                    complaint?.urgency === "urgent" ? "text-danger" : ""
                  }`}
                >
                  {new Date(complaint?.dateOfCompletion).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    color="success"
                    variant="flat"
                    onClick={() => navigate(`/director/${complaint?._id}`)}
                  >
                    view
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
