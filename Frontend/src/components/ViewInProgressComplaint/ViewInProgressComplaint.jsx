import React, { useEffect, useRef, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  Spinner,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  getPendingComplaints,
  updateComplaint,
} from "../../../store/complaintReducer";
import "react-toastify/dist/ReactToastify.css";

export default function ViewInProgressComplaint() {
  const dispatch = useDispatch();
  const { complaints, isLoading, error, loadingUpdate, update } = useSelector(
    (state) => state.complaint
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const [selectStatus, setSelectStatus] = useState("");
  const completionDateRef = useRef();

  useEffect(() => {
    dispatch(getPendingComplaints());

    if (update) {
      toast.success("Complaint Updated Successfully");
    }
  }, [dispatch, update]);
  // console.log(complaints);
  const openModalWithId = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedId(null); // Reset the selected ID when the modal is closed
    setIsModalOpen(false);
  };
  if (error) {
    toast.error(error);
  }

  const updateHandler = () => {
    const dateOfCompletion = completionDateRef.current.value;
    const status = selectStatus;
    const id = selectedId;
    const data = {
      id,
      data: { dateOfCompletion, status },
    };

    console.log(data);
    dispatch(updateComplaint(data));
    closeModal();
  };

  return (
    <div className="my-[2rem]">
      <ToastContainer position="top-center" autoClose={2000} />

      <h1 className="text-3xl font-bold text-center my-[1rem]">
        View Complaints
      </h1>
      <div className="flex flex-col gap-3">
        <Table
          aria-label="Example static collection table"
          className="min-h-[400px]"
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
          <TableBody
            isLoading={isLoading}
            loadingContent={<Spinner label="Loading..." />}
          >
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

                <TableCell>Ahmed</TableCell>
                <TableCell>
                  <Button
                    variant="bordered"
                    color="success"
                    onPress={() => openModalWithId(complaint?._id)}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* {isLoading && (
          <div className="flex justify-center align-center h-[90vh]">
            <Spinner color="primary" className="w-8rem h-[8rem]" />
          </div>
        )} */}
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
                Select Status of Job
              </ModalHeader>
              <ModalBody>
                <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
                  <label className="font-bold w-[18%] max-w-[full]">
                    Status of Job
                  </label>
                  <RadioGroup
                    orientation="horizontal"
                    onChange={(e) => setSelectStatus(e.target.value)}
                  >
                    <Radio value="INPROGRESS" color="success">
                      In progress
                    </Radio>
                    <Radio value="COMPLETED" color="success">
                      Completed
                    </Radio>
                  </RadioGroup>
                </div>
                <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
                  <label className="font-bold w-[18%] max-w-[full]">
                    Date of Completion
                  </label>
                  <Input
                    type="date"
                    placeholder="Enter Date of Completion"
                    ref={completionDateRef}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex gap-2">
                <Button color="danger" variant="flat" onPress={closeModal}>
                  Close
                </Button>
                {!loadingUpdate && (
                  <Button
                    color="success"
                    variant="flat"
                    onPress={updateHandler}
                  >
                    Submit
                  </Button>
                )}
                {loadingUpdate && (
                  <Button color="success" variant="flat">
                    {
                      <span className="flex items-center gap-[.5rem]">
                        <Spinner color="white" size="sm" />
                        <span>Updating...</span>
                      </span>
                    }
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
