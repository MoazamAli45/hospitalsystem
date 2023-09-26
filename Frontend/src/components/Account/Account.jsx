import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
const departments = [
  { name: "X Ray Dept", value: "x-ray" },
  { name: "Emergency Dept", value: "emergency" },
  { name: "Lab & Blood Bank Dept", value: "lab and blood" },
  { name: "OPD Dept", value: "opd" },
  { name: "Inpatient Dept", value: "inpatient" },
  {
    name: "Bin Qutab College of Health Sciences",
    value: "bin qutab college of health sciences",
  },
  { name: "Rehabilitation Dept", value: "rehabilitation" },
  { name: "Eye Dept", value: "eye" },
  { name: "Dental Dept", value: "dental" },
  { name: "Hospital General Maintenance Dept", value: "hospital maintenance" },
  { name: "Dialysis Dept", value: "dialysis" },
  { name: "Surgical Dept", value: "surgical" },
];
const Account = () => {
  return (
    <div className="my-[3rem]">
      <h1 className="text-primary font-bold text-3xl">Your Account Settings</h1>
      <div className="flex flex-col gap-[1rem] my-[1rem]">
        <div className="flex flex-col md:flex-row gap-4 my-[1rem] ">
          <Input
            type="text"
            label="Name"
            defaultValue={"Ali"}
            className="max-w-[30rem]"
          />
          <Select
            label="Department"
            placeholder="Select Department"
            className="max-w-[30rem]"
          >
            {departments.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div
          className="
        max-w-[20rem] justify-end self-end"
        >
          <Button color="primary" className=" ">
            Update Settings
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] my-[2rem]">
        <div className="flex flex-col md:flex-row gap-4 my-[1rem] ">
          <Input
            type="password"
            label="Password"
            defaultValue={"Ali"}
            className="max-w-[30rem]"
          />
          <Input
            type="password"
            label="Confrim Password"
            defaultValue={"Ali"}
            className="max-w-[30rem]"
          />
        </div>
        <div
          className="
        max-w-[20rem] justify-end self-end"
        >
          <Button color="danger" className=" ">
            Update Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Account;
