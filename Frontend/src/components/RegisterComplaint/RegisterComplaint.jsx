import { Input, Textarea, Radio, RadioGroup, Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const RegisterComplaint = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="my-[2rem]">
      <h1 className="text-center text-[2rem] font-bold ">
        Work Order Request Form{" "}
      </h1>
      <div className="flex flex-col gap-y-[1.5rem]">
        <div className="flex  gap-[3rem] mt-[2rem] items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">Department</label>
          <Input
            type="text"
            placeholder="Enter Department"
            className="max-w-[30rem]"
          />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Head of Department
          </label>
          <Input
            isRequired
            type="text"
            placeholder="Enter Head of Department Name"
            className="max-w-[30rem]"
          />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Job Descripiton
          </label>

          <Textarea
            isRequired
            placeholder="Enter your description"
            className="max-w-[30rem]"
          />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Date of Request
          </label>

          <Input
            isRequired
            type="date"
            placeholder="Enter Date"
            className="max-w-[30rem]"
          />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Nature of Job
          </label>
          <Input
            isRequired
            type="text"
            placeholder="Enter Job Nature"
            className="max-w-[30rem]"
          />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Estimated Cost
          </label>
          <Input
            isRequired
            type="text"
            placeholder="Enter Estimated Cost"
            className="max-w-[30rem]"
          />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">Urgency</label>
          <RadioGroup orientation="horizontal" defaultValue={"general"}>
            <Radio value="urgent" color="danger">
              Urgent
            </Radio>
            <Radio value="general" className="md:ml-[5rem]">
              General
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Status of Job
          </label>
          <RadioGroup orientation="horizontal" isReadOnly>
            <Radio value="urgent" color="success">
              In progress
            </Radio>
            <Radio value="general" className="md:ml-[3.2rem]" color="success">
              Completed
            </Radio>
          </RadioGroup>
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Allocated Person
          </label>
          <Input isReadOnly type="text" className="max-w-[30rem]" />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">
            Date of Completion
          </label>
          <Input isReadOnly type="text" className="max-w-[30rem]" />
        </div>

        <Button color="primary" className="self-center my-[1rem]">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default RegisterComplaint;
