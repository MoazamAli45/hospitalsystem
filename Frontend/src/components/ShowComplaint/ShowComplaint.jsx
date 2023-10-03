import { Input, Textarea, Radio, RadioGroup, Button } from "@nextui-org/react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComplaint } from "../../../store/complaintReducer";
import { Spinner } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
const ShowComplaint = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, complaint } = useSelector(
    (state) => state.complaint
  );

  useEffect(() => {
    dispatch(getComplaint(params.id));
  }, [dispatch, params.id]);
  // console.log(complaint?.dateOfReq);

  // console.log(params.id);

  if (error) {
    toast.error(error);
  }

  return (
    <form className="my-[2rem]">
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="text-center text-[2rem] font-bold ">Show Complaint </h1>
      {isLoading && (
        <div className="flex justify-center align-center h-[90vh]">
          <Spinner color="primary" className="w-8rem h-[8rem]" />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col gap-y-[1.5rem]">
          <div className="flex  gap-[3rem] mt-[2rem] items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">Department</label>
            <Input
              isReadOnly
              type="text"
              className="max-w-[30rem]"
              defaultValue={complaint?.department}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Head of Department
            </label>
            <Input
              isReadOnly
              type="text"
              placeholder="Enter Head of Department Name"
              className="max-w-[30rem]"
              defaultValue={complaint?.hod}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Job Descripiton
            </label>

            <Textarea
              isReadOnly
              placeholder="Enter your description"
              className="max-w-[30rem]"
              defaultValue={complaint?.jobDesc}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Date of Request
            </label>

            <Input
              isReadOnly
              type="text"
              className="max-w-[30rem]"
              defaultValue={new Date(complaint?.dateOfReq).toLocaleDateString(
                "en-US",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Nature of Job
            </label>
            <Input
              isReadOnly
              type="text"
              placeholder="Enter Job Nature"
              className="max-w-[30rem]"
              defaultValue={complaint?.natureOfJob}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Estimated Cost
            </label>
            <Input
              isReadOnly
              type="text"
              placeholder="Enter Estimated Cost"
              className="max-w-[30rem]"
              defaultValue={complaint?.estimatedCost}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">Urgency</label>
            <Input
              isReadOnly
              type="text"
              placeholder="Enter Urgency"
              className="max-w-[30rem]"
              defaultValue={complaint?.urgency}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Status of Job
            </label>
            <Input
              isReadOnly
              type="text"
              placeholder="Status of Job"
              className="max-w-[30rem]"
              defaultValue={complaint?.status}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Allocated Person
            </label>
            <Input
              isReadOnly
              type="text"
              className="max-w-[30rem]"
              defaultValue={complaint?.allocatedTo}
            />
          </div>
          <div className="flex  gap-[3rem]  items-center mx-[1rem] ">
            <label className="font-bold w-[18%] max-w-[full]">
              Date of Completion
            </label>
            <Input
              isReadOnly
              type="text"
              className="max-w-[30rem]"
              defaultValue={
                complaint?.dateOfCompletion &&
                new Date(complaint?.dateOfCompletion).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )
              }
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default ShowComplaint;
