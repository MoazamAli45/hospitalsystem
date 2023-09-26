import React, { useState } from "react";

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
  Radio,
  RadioGroup,
} from "@nextui-org/react";
export default function AllComplaints() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModalWithId = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedId(null); // Reset the selected ID when the modal is closed
    setIsModalOpen(false);
  };

  return (
    <div className="my-[2rem]">
      <h1 className="text-3xl font-bold text-center my-[1rem]">
        All Complaints
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
            <TableColumn className="text-primary">View</TableColumn>
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
              <TableCell>Completed</TableCell>
              <TableCell>29-09-23</TableCell>
              <TableCell>
                <Button
                  color="success"
                  variant="flat"
                  onPress={openModalWithId}
                >
                  view
                </Button>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Dental</TableCell>
              <TableCell>Ali</TableCell>
              <TableCell>Beds</TableCell>
              <TableCell>29-07-23</TableCell>
              <TableCell>furniture</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>General</TableCell>

              <TableCell>Ahmed</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>29-07-23</TableCell>
              <TableCell>
                <Button
                  color="success"
                  variant="flat"
                  onPress={openModalWithId}
                >
                  view
                </Button>
              </TableCell>
            </TableRow>
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
                Select Status of Job
              </ModalHeader>
              <ModalBody>
                <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
                  <label className="font-bold w-[18%] max-w-[full]">
                    Status of Job
                  </label>
                  <RadioGroup orientation="horizontal">
                    <Radio value="urgent" color="success">
                      In progress
                    </Radio>
                    <Radio value="general" color="success">
                      Completed
                    </Radio>
                  </RadioGroup>
                </div>
                <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
                  <label className="font-bold w-[18%] max-w-[full]">
                    Date of Completion
                  </label>
                  <Input type="date" placeholder="Enter Date of Completion" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={closeModal}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
