"use client";
import React from "react";
import { Button, Form, type FormProps, InputNumber, Select } from "antd";
import { postData } from "../../utils/fetchJson";

const { Option } = Select;

type FieldType = {
  age: number;
  sex: string | number;
  cp: number;
  trestbps: number;
  chol: number;
  fbs: number;
  restecg: number;
  thalach: number;
  exang: number;
  oldpeak: number;
  slope: number;
  ca: number;
  thal: number;
};

const initialValues: FieldType = {
  age: 65,
  sex: "male",
  cp: 3,
  trestbps: 160,
  chol: 250,
  fbs: 0,
  restecg: 1,
  thalach: 150,
  exang: 0,
  oldpeak: 2.3,
  slope: 2,
  ca: 0,
  thal: 0,
};

const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
  if (formData.sex === "male") {
    formData.sex = 1;
  } else {
    formData.sex = 0;
  }

  const url = "https://172.31.16.27:5001/task_1";
  // const url = "http://127.0.0.1:5001/task_1";

  try {
    const responseData = await postData(url, formData);
    console.log("Response:", responseData);
  } catch (error) {
    console.error("Failed to submit form:", error);
  }
};

export function P1Form() {
  return (
    <Form
      name="basic"
      layout="vertical"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType> label="Age" name="age">
        <InputNumber />
      </Form.Item>

      <Form.Item name="sex" label="Gender" style={{ width: 350 }}>
        <Select placeholder="Select Gender">
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      </Form.Item>

      <Form.Item<FieldType> label="Chest pain type" name="cp">
        <InputNumber />
      </Form.Item>

      <Form.Item<FieldType> label="Resting blood pressure" name="trestbps">
        <InputNumber />
      </Form.Item>

      <Form.Item<FieldType> label="Serum cholestoral in mg/dl" name="chol">
        <InputNumber />
      </Form.Item>

      <Form.Item<FieldType> label="Fasting blood sugar" name="fbs">
        <InputNumber />
      </Form.Item>

      <Form.Item<FieldType>
        label="Resting electrocardiographic results"
        name="restecg"
      >
        <InputNumber />
      </Form.Item>

      <Form.Item<FieldType> label="exercise induced angina" name="thalach">
        <InputNumber />
      </Form.Item>

      <Form.Item<FieldType> label="maximum heart rate achieved" name="exang">
        <InputNumber />
      </Form.Item>

      <Form.Item<FieldType> label="ST depression" name="oldpeak">
        <InputNumber />
      </Form.Item>
      <Form.Item<FieldType> label="The slope of the peak" name="slope">
        <InputNumber />
      </Form.Item>
      <Form.Item<FieldType> label="Number of major vessels" name="ca">
        <InputNumber />
      </Form.Item>
      <Form.Item<FieldType> label="Thalassemia" name="thal">
        <InputNumber />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
