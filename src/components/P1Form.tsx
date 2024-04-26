"use client";
import React, { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  type FormProps,
  InputNumber,
  Row,
  Select,
} from "antd";
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
  age: 57,
  sex: "male",
  cp: 1,
  trestbps: 113,
  chol: 230,
  fbs: 0,
  restecg: 0,
  thalach: 150,
  exang: 0,
  oldpeak: 0,
  slope: 1,
  ca: 1,
  thal: 2,
};

interface IResponse {
  prediction: number;
}

export function P1Form() {
  const [form] = Form.useForm();

  const [healthStatus, setHealthStatus] = React.useState<string>("");

  const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
    if (formData.sex === "male") {
      formData.sex = 1;
    } else {
      formData.sex = 0;
    }

    // const url: string = "https://sgrzebyk-backend.net/task_1";
    const url: string =
      "http://ip-172-31-13-23.eu-central-1.compute.internal/task_1";

    try {
      const responseData: IResponse = await postData(url, formData);
      setHealthStatus(
        responseData.prediction === 1 ? "Heart disease" : "No heart disease"
      );
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  const formReset = () => {
    form.resetFields();
    setHealthStatus("");
  };

  useEffect(() => {
    document.querySelectorAll("input").forEach((input) => {
      input.removeAttribute("data-dashlane-rid");
      input.removeAttribute("data-form-type");
      input.removeAttribute("data-kwimpalastatus");
    });
  }, []);
  return (
    <Form
      form={form}
      name="basic"
      layout="horizontal"
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: 20 }}>
          <Form.Item name="sex" label="Gender">
            <Select placeholder="Select Gender">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>

          <Form.Item<FieldType> label="Age" name="age">
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType> label="Chest pain type" name="cp">
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType> label="Resting blood pressure" name="trestbps">
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
          <div style={{ marginBottom: 44, fontSize: 16 }}>
            <span style={{ fontWeight: "bolder" }}>Health status:</span>{" "}
            {healthStatus}
          </div>
        </div>

        <div>
          <Col>
            <Form.Item<FieldType> label="Cholestoral" name="chol">
              <InputNumber />
            </Form.Item>
          </Col>
          <Form.Item<FieldType> label="Fasting blood sugar" name="fbs">
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType>
            label="Resting electrocardiographic results"
            name="restecg"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType> label="Exercise induced angina" name="thalach">
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType>
            label="Maximum heart rate achieved"
            name="exang"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType> label="ST depression" name="oldpeak">
            <InputNumber />
          </Form.Item>
        </div>
      </div>

      <div>
        <Form.Item wrapperCol={{ offset: 9 }}>
          <Button type="primary" htmlType="submit" style={{ marginRight: 12 }}>
            Submit
          </Button>

          <Button type="default" onClick={formReset}>
            Reset Form
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
