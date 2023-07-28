"use client";
import type { RootState } from "@/Redux/store";
import { useSelector, useDispatch } from "react-redux";

const UserDetail = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return <h1 className="">{count}</h1>;
};

export default UserDetail;
