import React, { useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";
import { notification } from "antd";
export default function Contact({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  //backend

  const handleSubmit = async (values) => {
    try {
      setLoading(true); //click to load
      await axios.post(
        "https://tospaceserver.vercel.app/api/sendEmail",
        values
      );
      form.resetFields()  //submit to clear the text fields
      notification.success({ message: "Mail sent successfully" }); //npm init antd
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  };

  //frontend
  const { Option } = Select;
  const [form] = Form.useForm();
  return (
    {
      /* buttons not show to footer false */
    },
    (
      <Modal width={850} open={open} footer={false} className="modelhead">
        <div className=" contactbg text-white items-center ">
          <div className="w-[100%] flex">
            <h2 className="text-[30px] text-black py-5 ml-[5%] font-bold">
              Get in touch with us to learn more!
            </h2>
            <CloseIcon
              onClick={() => setOpen(false)}
              className="cursor-pointer absolute right-8 hover:text-red-600 text-black"
            />
          </div>
          {/* laptop view */}

          <Form
            layout="vertical"
            className="!w-[90%]  flex flex-col justify-center items-center lapview"
            onFinish={handleSubmit}
            form={form}
          >
            <div className="grid laptop:grid-cols-2 gap-x-10">
              {/* <div className="px-5"> */}
              <Form.Item
                rules={[
                  { required: true, message: "Please enter your name" },
                  { type: "name", message: "Please enter valid name" },
                ]}
                name="name" //this name send to the backend
              >
                <Input
                  placeholder="Name"
                  className="!h-[38px] !w-[250px]  hover:!border-2 "
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    message: "Please enter your designation",
                  },
                  {
                    type: "designation",
                    message: "Please enter valid designation",
                  },
                ]}
                name="designation"
              >
                <Input
                  placeholder="What I Do"
                  className="!h-[38px] !w-[250px]   hover:!border-2  "
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please enter your Number" },
                  {
                    type: "phone",
                  },
                  {
                    pattern: /^(?:\d*)$/,
                    message: "Value should contain just number",
                  },
                  {
                    pattern: /^[\d]{10,10}$/,
                    message: "Value should be less than 10 character",
                  },
                ]}
                name="phone"
              >
                <Input
                  placeholder="Number"
                  className="!h-[38px] !w-[250px]   hover:!border-2  "
                />
              </Form.Item>
              <Form.Item
                className="!w-[250px]  "
                name="dept"
                // rules={[{ required:true, message: "Province is required" }]}
                rules={[
                  {
                    required: true,
                    message: "Please select the field",
                  },
                ]}
              >
                <Select placeholder="Who Am I">
                  <Option value="Teacher">Teacher</Option>
                  <Option value="Parent">Parent</Option>
                  <Option value="Student">Student</Option>

                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter valid email" },
                ]}
                name="email"
              >
                <Input
                  onChange={(e) =>
                    form.setFieldsValue({
                      email: e.target.value.toLocaleLowerCase(),
                    })
                  }
                  placeholder="Email"
                  className="!h-[38px] !w-[250px] mobile-sm:mt-5 laptop:mt-0  hover:!border-2 "
                />
              </Form.Item>
              {/* </div> */}
              {/* <div className="px-5 !p-0"> */}

              <Form.Item
                className="!w-[250px] "
                name="course"
                rules={[{ required: true, message: "Please select the field" }]}
              >
                <Select placeholder="Select Course">
                  <Option value="Electron Module">Electron Module</Option>
                  <Option value="Gravity Module">Gravity Module</Option>
                  <Option value="CubeSat 1">CubeSat 1 </Option>
                  <Option value="Cubesat Mini 1">Cubesat Mini 1</Option>
                  <Option value="Cubesat Mini 2">Cubesat Mini 2</Option>
                  <Option value="Cubesat Mini 2">Other</Option>
                </Select>
              </Form.Item>
              {/* </div> */}
            </div>
            <Form.Item
              rules={[
                { message: "Please enter your Number" },
                {
                  type: "message",
                  message: "Please enter your Message",
                },
              ]}
              name="message"
            >
              <Input
                placeholder="Message"
                className="laptop:!h-[90px] laptop:!w-[540px]   hover:!border-2 "
              />
            </Form.Item>
            <div className="w-[100%]">
              <Button
                loading={loading}
                htmlType="submit"
                type="submit"
                className=" course_btn2 text-white uppercase text-sm !font-semibold !px-4  !rounded ml-[90px]"
              >
                Submit
              </Button>
            </div>
          </Form>

          {/* mobile view fields */}

          <Form
            layout="vertical"
            className="!w-[90%]  flex flex-col justify-center items-center mobileview"
            onFinish={handleSubmit}
            form={form}
          >
            <div className="grid laptop:grid-cols-2 gap-x-10">
              {/* <div className="px-5"> */}
              <Form.Item
                rules={[
                  { required: true, message: "Please enter your name" },
                  { type: "name", message: "Please enter valid name" },
                ]}
                name="name" //this name send to the backend
              >
                <Input
                  placeholder="Name"
                  className="!h-[38px] !w-[250px]  hover:!border-2 "
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please enter your Number" },
                  {
                    type: "phone",
                  },
                  {
                    pattern: /^(?:\d*)$/,
                    message: "Value should contain just number",
                  },
                  {
                    pattern: /^[\d]{10,10}$/,
                    message: "Value should be less than 10 character",
                  },
                ]}
                name="phone"
              >
                <Input
                  placeholder="Number"
                  className="!h-[38px] !w-[250px]   hover:!border-2  "
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter valid email" },
                ]}
                name="email"
              >
                <Input
                  onChange={(e) =>
                    form.setFieldsValue({
                      email: e.target.value.toLocaleLowerCase(),
                    })
                  }
                  placeholder="Email"
                  className="!h-[38px] !w-[250px]  laptop:mt-0  hover:!border-2 "
                />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    message: "Please enter your designation",
                  },
                  {
                    type: "designation",
                    message: "Please enter valid designation",
                  },
                ]}
                name="designation"
              >
                <Input
                  placeholder="What I Do"
                  className="!h-[38px] !w-[250px]   hover:!border-2  "
                />
              </Form.Item>

              <Form.Item
                className="!w-[250px]  "
                name="dept"
                rules={[{ required: true, message: "Please select the field" }]}
              >
                <Select placeholder="Who Am I">
                  <Option value="Teacher">Teacher</Option>
                  <Option value="Parent">Parent</Option>
                  <Option value="Student">Student</Option>

                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>

              {/* </div> */}
              {/* <div className="px-5 !p-0"> */}

              <Form.Item
                className="!w-[250px] "
                name="course"
                rules={[{ required: true, message: "Please select the field" }]}
              >
                <Select placeholder="Select Course">
                  <Option value="Electron Module">Electron Module</Option>
                  <Option value="Gravity Module">Gravity Module</Option>
                  <Option value="CubeSat 1">CubeSat 1 </Option>
                  <Option value="Cubesat Mini 1">Cubesat Mini 1</Option>
                  <Option value="Cubesat Mini 2">Cubesat Mini 2</Option>
                  <Option value="Cubesat Mini 2">Other</Option>
                </Select>
              </Form.Item>
              {/* </div> */}
            </div>
            <Form.Item
              rules={[
                { message: "Please enter your Number" },
                {
                  type: "message",
                  message: "Please enter your Message",
                },
              ]}
              name="message"
            >
              <Input
                placeholder="Message"
                className="!h-[120px] !w-[250px]   hover:!border-2 "
              />
            </Form.Item>
            <div className="w-[100%]">
              <Button
                loading={loading}
                htmlType="submit"
                type="submit"
                className=" course_btn2 text-white uppercase text-sm !font-semibold !px-4  !rounded ml-[12px] buttonsub"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    )
  );
}
