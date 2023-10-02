import React, { useRef, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "@nextui-org/react";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllocateComplaints,
  reset,
  updateComplaint,
} from "../../../store/complaintReducer";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function AllocateComplaints() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { complaints, isLoading, error, update, loadingUpdate } = useSelector(
    (state) => state.complaint
  );
  const allocateRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    dispatch(getAllocateComplaints());
    if (error) {
      toast.error(error);
    }
    if (update) {
      toast.success("Complaint Updated Successfully");
    }

    () => {
      toast.dismiss();
      dispatch(reset());
    };
  }, [dispatch, error, update]);

  const openModalWithId = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Reset the selected ID when the modal is closed
    setIsModalOpen(false);
  };
  const updateHandler = () => {
    const allocatedTo = allocateRef.current.value;
    const id = selectedId;
    const data = {
      id,
      data: { allocatedTo },
    };

    // console.log(data);
    dispatch(updateComplaint(data));
    closeModal();
  };

  return (
    <div className="my-[2rem]">
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="text-3xl font-bold text-center my-[1rem]">Complaints</h1>
      <div className="flex flex-col gap-3">
        <Table
          aria-label="Example static collection table"
          className="min-h-[320px] lg:w-[110%] mx-auto "
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
            <TableColumn className="text-primary text-center">
              Allocated{" "}
            </TableColumn>
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
              <TableRow
                key={id}
                className={`${
                  new Date().toDateString() ===
                    new Date(complaint?.dateOfReq).toDateString() || id === 0
                    ? "bg-red-200 "
                    : ""
                }`}
              >
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

                <TableCell>
                  {" "}
                  <Button
                    variant="bordered"
                    color="success"
                    onPress={() => openModalWithId(complaint?._id)}
                  >
                    Allocate to
                  </Button>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Button
                    variant="flat"
                    color="success"
                    onClick={() => navigate(`/gso/${complaint?._id}`)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={closeModal}
        placement="top-center"
      >
        <ModalContent>
          {(closeModal) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Select Allocation
              </ModalHeader>
              <ModalBody>
                <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
                  <label className=" max-w-[full]">Allocated Person</label>
                  <Input
                    type="text"
                    placeholder="Enter Allocated Person"
                    ref={allocateRef}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex gap-1">
                <Button color="danger" variant="flat" onPress={closeModal}>
                  Close
                </Button>
                <Button color="success" variant="flat" onPress={updateHandler}>
                  {!loadingUpdate && "Allocate"}
                  {loadingUpdate && (
                    <span className="flex  items-center gap-[.5rem]">
                      <Spinner color="white" size="sm" />
                      <span>Submitting...</span>
                    </span>
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
