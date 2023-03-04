import axios from "axios";
import { UserData } from "../AllInterfaces";

const localUrl = "http://localhost:6400";

export const createUser = async ({
  name,
  email,
  password,
  userName,
  phoneNumber,
}: any) => {
  return await axios
    .post(`${localUrl}/api/user/signup`, {
      name,
      email,
      password,
      userName,
      phoneNumber,
    })
    .then((res) => {
      return res.data;
    });
};

export const GetOneUser = async (id: any) => {
  return await axios
    .get(`${localUrl}/api/user/${id}/getone`)
    .then((res) => res.data);
};

export const TransferMoney = async (data: any, id: any) => {
  return await axios
    .post(`${localUrl}/api/user/transaction/${id}/${id}`, data)
    .then((res) => res.data);
};
