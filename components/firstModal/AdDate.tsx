import React, { useState } from "react";
import DatePicker from "react-datepicker";

interface Props {
  updateDate: (date: Date) => any;
}

const AdDate = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const { updateDate } = props;
  return (
    <DatePicker selected={startDate} onChange={(date: Date) => {
      setStartDate(date);
      updateDate(date);
    }} />
  );
};

export default AdDate;
