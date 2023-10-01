import { Input, Textarea, Radio, RadioGroup, Button } from "@nextui-org/react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createComplaint } from "../../../store/complaintReducer";
import { Spinner } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterComplaint = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.complaint);

  const departmentRef = useRef();
  const hodRef = useRef();
  const jobRef = useRef();
  const dateRef = useRef();
  const natureRef = useRef();
  const costRef = useRef();
  const [selectedUrgency, setSelectedUrgency] = useState("general");

  const submitHandler = (e) => {
    e.preventDefault();

    const department = departmentRef.current.value;
    const hod = hodRef.current.value;
    const jobDesc = jobRef.current.value;
    const dateOfReq = dateRef.current.value;
    const natureOfJob = natureRef.current.value;
    const estimatedCost = +costRef.current.value;
    const urgency = selectedUrgency;

    const data = {
      department,
      hod,
      jobDesc,
      dateOfReq,
      natureOfJob,
      estimatedCost,
      urgency,
    };

    console.log(data);
    dispatch(createComplaint(data)).then(() => {
      toast.success("Complaint Registered Successfully");
    });

    departmentRef.current.value = "";
    hodRef.current.value = "";
    jobRef.current.value = "";
    dateRef.current.value = "";

    natureRef.current.value = "";
    costRef.current.value = "";
  };
  if (error) {
    toast.error(error);
  }

  return (
    <form className="my-[2rem]" onSubmit={submitHandler}>
      <ToastContainer position="top-center" autoClose={2000} />
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
            ref={departmentRef}
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
            ref={hodRef}
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
            ref={jobRef}
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
            ref={dateRef}
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
            ref={natureRef}
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
            ref={costRef}
          />
        </div>
        <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
          <label className="font-bold w-[18%] max-w-[full]">Urgency</label>
          <RadioGroup
            orientation="horizontal"
            defaultValue={selectedUrgency}
            onChange={(e) => setSelectedUrgency(e.target.value)}
          >
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

        {!isLoading && (
          <Button
            color="primary"
            className="self-center my-[1rem]"
            type="submit"
          >
            Submit
          </Button>
        )}
        {isLoading && (
          <Button color="primary" className="self-center my-[1rem]">
            <span className="flex  items-center gap-[.5rem]">
              <Spinner color="white" size="sm" />
              <span>Submitting...</span>
            </span>
          </Button>
        )}
      </div>
    </form>
  );
};

export default RegisterComplaint;
