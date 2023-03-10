import React from "react";
import styled from "styled-components";
import img1 from "../Assets/svg1.png";
import img2 from "../Assets/svg2.png";
import img3 from "../Assets/svg3.png";
import img4 from "../Assets/svg4.png";
import piggy from "../Assets/piggy.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../ApiCalls/ApiCall";

import { UseAppDispach } from "../Global/Stroe";

import { User } from "../Global/ReduxState";

const Create = () => {
  const dispatch = UseAppDispach();
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required("field must be required"),
      userName: yup.string().required("field must be required"),
      email: yup.string().required("field must be required"),
      phoneNumber: yup.number().required("field must be required"),
      password: yup.string().min(9).required(),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password")])
        .required(),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },

    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const posting = useMutation({
    mutationKey: ["created"],
    mutationFn: createUser,

    onSuccess: (myData) => {
      // console.log("user", myData);
      dispatch(User(myData.data));
      navigate("/dashboard");
    },
  });

  const Submit = handleSubmit(async (data) => {
    posting.mutate(data);
    // await axios.post(`${localUrl}/api/user/register`, data).then((res) => {
    // console.log(res);
    // });

    // reset()
  });
  return (
    <Container>
      <Image1 src={img1} />
      <Image2 src={img2} />
      <Image3 src={img3} />
      <Image4 src={img4} />
      <Hold>
        <Piggy src={piggy} />
      </Hold>
      <Card onSubmit={Submit}>
        <Top>
          <h1>Create a Secure Account</h1>
        </Top>
        <P>
          <p>Welcome to the future of Savings & Investments</p>
        </P>
        <Inputhold>
          <Email>Full Name</Email>
          <Input {...register("name")} placeholder="Full Name" type="text" />
          <p>{errors?.name && errors?.name?.message}</p>
        </Inputhold>

        <Inputhold>
          <Email>username</Email>
          <Input {...register("userName")} placeholder="username" type="text" />
          <p>{errors?.userName && errors?.userName?.message}</p>
        </Inputhold>
        <Inputhold>
          <Email>Email</Email>
          <Input
            {...register("email")}
            placeholder="Email Address"
            type="email"
          />
          <p>{errors?.email && errors?.email?.message}</p>
        </Inputhold>
        <Inputhold>
          <Email>Phone Number</Email>
          <Input
            {...register("phoneNumber")}
            placeholder="Phone Number"
            type="number"
          />
          <p>{errors?.phoneNumber && errors?.phoneNumber?.message}</p>
        </Inputhold>
        <Inputhold>
          <Email>Password</Email>
          <Input
            {...register("password")}
            placeholder="Password"
            type="password"
          />
          <p>{errors?.password && errors?.password?.message}</p>
        </Inputhold>
        <Inputhold>
          <Email>Confirm Password</Email>
          <Input
            {...register("confirmpassword")}
            placeholder="Confirm Password"
            type="password"
          />
          <p>{errors?.confirmpassword && errors?.confirmpassword?.message}</p>
        </Inputhold>
        <Button type="submit">CREATE ACCOUNT</Button>
      </Card>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Acc>Already have an account? Log In</Acc>
      </NavLink>
    </Container>
  );
};

export default Create;
const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  font-size: 0.875rem;
  color: #fff;
  font-weight: 700;
  font-family: U8, sans-serif;
  background-color: #0d60d8;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  outline: none;
  margin-top: 30px;
`;
const Input = styled.input`
  width: 98%;
  color: #1a202c;
  background-color: #edf2f7;
  height: 45px;
  border: none;
  outline: none;
  padding-left: 10px;
  margin-top: 5px;
`;
const Email = styled.div`
  font-size: 0.75rem;
  color: #4a5568;
  line-height: 2;
  font-weight: 700;
  font-family: U8, sans-serif;
`;
const Inputhold = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const P = styled.div`
  p {
    font-size: 0.875rem;
    color: #4a5568;
    font-family: Karla, sans-serif;
    margin: 0;
  }
  margin-top: 5px;
`;
const Top = styled.div`
  h1 {
    font-size: 1.35rem;
    color: #083e9e;
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
  }
  margin-top: 15px;
`;
const Acc = styled.div`
  font-size: 0.85rem;
  font-family: Karla, sans-serif;
  font-weight: 400;
  color: white;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    color: #bdbdbd;
  }
`;
const Card = styled.form`
  width: 380px;
  /* height: 960px; */
  background-color: white;
  margin-top: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 40px;
  display: flex;

  align-items: center;
  flex-direction: column;
  p {
    color: red;
    margin: 0;
  }
`;
const Piggy = styled.img``;
const Hold = styled.div`
  display: flex;
  left: 0;
`;

const Image4 = styled.img`
  position: absolute;
  right: -80px;
  height: 190px;
  top: 0;
  position: fixed;
`;
const Image3 = styled.img`
  position: absolute;
  left: -80px;
  height: 190px;
  bottom: 20px;
  position: fixed;
`;
const Image2 = styled.img`
  position: absolute;
  left: -10px;
  height: 190px;
  top: -75px;
  position: fixed;
`;
const Image1 = styled.img`
  position: absolute;
  right: -60px;
  height: 190px;
  bottom: 20px;
  position: fixed;
`;

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  /* height: 100vh; */
  background-color: #062863;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
`;
