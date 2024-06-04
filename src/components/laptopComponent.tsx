
import { useDispatch, useSelector } from "react-redux";
import { Product, addLaptop, laptopSliceSelector } from "../reducers/laptopSlice";
import { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";

const LaptopComponent = () => {
  const laptop = useSelector(laptopSliceSelector);
  const dispatch = useDispatch()

  const priceRef = useRef<HTMLInputElement>(null);
  const cpuRef = useRef<HTMLInputElement>(null);
  const genRef = useRef<HTMLInputElement>(null);
  const ramRef = useRef<HTMLInputElement>(null);
  const hddRef = useRef<HTMLInputElement>(null);

  const addLaptopHandle = () => {
    dispatch(addLaptop(
      priceRef.current?.value || "",
      cpuRef.current?.value || "",
      parseInt(genRef.current?.value || "0"),
      ramRef.current?.value || "",
      hddRef.current?.value || ""))
    // dispatch(addLaptop({
    //   id: nanoid(),
    //   price: priceRef.current?.value,
    //   spec: {
    //     cpu: cpuRef.current?.value,
    //     gen: genRef.current?.value,
    //     ram: ramRef.current?.value,
    //     hdd: hddRef.current?.value,
    //   }
    // }));
  }

  //   console.log(laptop, 'laptop');
  return (
    <div>
      <div>
        <h4>add laptop</h4>
        <input type="text" placeholder="enter price" ref={priceRef} />
        <input type="text" placeholder="enter cpu" ref={cpuRef} />
        <input type="text" placeholder="enter gen" ref={genRef} />
        <input type="text" placeholder="enter ram" ref={ramRef} />
        <input type="text" placeholder="enter hdd" ref={hddRef} />
        <button onClick={addLaptopHandle}>add laptop</button>
      </div>
      {laptop.map((ele: Product) => (
        <p key={ele.id}>
          {ele.price} | {ele.spec.cpu} | {ele.spec.gen} | {ele.spec.hdd} | {ele.spec.ram}
        </p>
      ))}
    </div>
  );
};

export default LaptopComponent;
