import axios from "axios";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTextField from "./CustomTextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const InfrastructureAddEdit = () => {
  const [name_of_project, setName_of_project] = useState("");
  const [location, setLocation] = useState("");
  const [date_of_public_bidding, setDate_of_public_bidding] = useState("");
  const [name_of_contractor, setName_of_contractor] = useState("");
  const [
    contrators_authorized_representative,
    setContrators_authorized_representative,
  ] = useState("");
  const [position, setPosition] = useState("");
  const [date_of_notice_of_award, setDate_of_notice_of_award] = useState("");
  const [performance_security_posted, setPerformance_security_posted] =
    useState("");
  const [issuing_entity, setIssuing_entity] = useState("");
  const [policy_no, setPolicy_no] = useState("");
  const [amount_performance_posted, setAmount_performance_posted] =
    useState("");
  const [date_of_effectivity, setDate_of_effectivity] = useState("");
  const [expiration_date, setExpiration_date] = useState("");
  const [credit_line_from_bank, setCredit_line_from_bank] = useState("");
  const [amount_credit_line, setAmount_credit_line] = useState("");
  const [date_credit_line, setDate_credit_line] = useState("");
  const [date_of_notiization_of_contract, setDate_of_notiization_of_contract] =
    useState("");
  const [book_no, setBook_no] = useState("");
  const [doc_no, setDoc_no] = useState("");
  const [series_of, setSeries_of] = useState("");
  const [
    date_issuance_of_notice_to_proceed,
    setDate_issuance_of_notice_to_proceed,
  ] = useState("");
  const [issued_by, setIssued_by] = useState("");
  const [contract_amount, setContract_amount] = useState("");
  const [revised_contract_amount, setRevised_contract_amount] = useState("");
  const [contract_duration, setContract_duration] = useState("");
  const [revised_contract_time, setRevised_contract_time] = useState("");
  const [time_suspension_extension, setTime_suspension_extension] =
    useState("");
  const [peo_project_engineer, setPeo_project_engineer] = useState("");
  const [contractors_project_engineer, setContractors_project_engineer] =
    useState("");
  const [materials_engineer, setMaterials_engineer] = useState("");

  const { infrastructureId } = useParams();
  const navigate = useNavigate();

  const handleSave = async () => {
    console.log(date_credit_line);
    const res = await axios
      .post("http://localhost:8000/api/add-infrastructure", {
        name_of_project: name_of_project,
        location: location,
        date_of_public_bidding: date_of_public_bidding,
        name_of_contractor: name_of_contractor,
        contrators_authorized_representative:
          contrators_authorized_representative,
        position: position,
        date_of_notice_of_award: date_of_notice_of_award,
        performance_security_posted: performance_security_posted,
        issuing_entity: issuing_entity,
        policy_no: policy_no,
        amount_performance_posted: amount_performance_posted,
        date_of_effectivity: date_of_effectivity,
        expiration_date: expiration_date,
        credit_line_from_bank: credit_line_from_bank,
        amount_credit_line: amount_credit_line,
        date_credit_line: date_credit_line,
        date_of_notiization_of_contract: date_of_notiization_of_contract,
        book_no: book_no,
        doc_no: doc_no,
        series_of: series_of,
        date_issuance_of_notice_to_proceed: date_issuance_of_notice_to_proceed,
        issued_by: issued_by,
        contract_amount: contract_amount,
        revised_contract_amount: revised_contract_amount,
        contract_duration: contract_duration,
        revised_contract_time: revised_contract_time,
        time_suspension_extension: time_suspension_extension,
        peo_project_engineer: peo_project_engineer,
        contractors_project_engineer: contractors_project_engineer,
        materials_engineer: materials_engineer,
      })
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data.message);
          Swal.fire({
            title: "Success",
            text: "Save successfully",
            icon: "success",
            confirmButtonText: "OK!",
          });
        }
      })
      .catch(function (error) {
        console.log("error kuno", error);
        console.log(error.response.data);
      });
  };

  return (
    <Box flex={6} p={2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Paper elevation={3}>
          <Stack
            direction="row"
            spacing={2}
            p={3}
            justifyContent="space-between"
          >
            <Typography variant="h5">Infastructures Information</Typography>

            <Button variant="contained" color="success" onClick={handleSave}>
              SAVE
            </Button>
          </Stack>
          <Box m={3} pb={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="name_of_project"
                  label="Name of Project"
                  name="name_of_project"
                  onChange={(e) => {
                    setName_of_project(e.target.value);
                  }}
                  value={name_of_project}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="location"
                  label="Location"
                  name="location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  value={location}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="date_of_public_bidding"
                  label="Date of Public Bidding"
                  name="date_of_public_bidding"
                  onChange={(e) => {
                    setDate_of_public_bidding(e.target.value);
                  }}
                  value={date_of_public_bidding}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="name_of_contractor"
                  label="Name of Contractor"
                  name="name_of_contractor"
                  onChange={(e) => {
                    setName_of_contractor(e.target.value);
                  }}
                  value={name_of_contractor}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="contrators_authorized_representative"
                  label="Contractors Authorized Representative"
                  name="contrators_authorized_representative"
                  onChange={(e) => {
                    setContrators_authorized_representative(e.target.value);
                  }}
                  value={contrators_authorized_representative}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="position"
                  label="Position"
                  name="position"
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                  value={position}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="date"
                  id="date_of_notice_of_award"
                  label="Date of Notice Award"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="date_of_notice_of_award"
                  onChange={(e) => {
                    setDate_of_notice_of_award(e.target.value);
                  }}
                  value={date_of_notice_of_award}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="performance_security_posted"
                  label="Performance Security Posted"
                  name="performance_security_posted"
                  onChange={(e) => {
                    setPerformance_security_posted(e.target.value);
                  }}
                  value={performance_security_posted}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="issuing_entity"
                  label="Issuing Enity"
                  name="issuing_entity"
                  onChange={(e) => {
                    setIssuing_entity(e.target.value);
                  }}
                  value={issuing_entity}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="policy_no"
                  label="Policy No."
                  name="policy_no"
                  onChange={(e) => {
                    setPolicy_no(e.target.value);
                  }}
                  value={policy_no}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="amount_performance_posted"
                  label="Amount Performance Posted"
                  name="amount_performance_posted"
                  onChange={(e) => {
                    setAmount_performance_posted(e.target.value);
                  }}
                  value={amount_performance_posted}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="date"
                  id="date_of_effectivity"
                  label="Date of Effective"
                  name="date_of_effectivity"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setDate_of_effectivity(e.target.value);
                  }}
                  value={date_of_effectivity}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="date"
                  id="expiration_date"
                  label="Expiration Date"
                  name="expiration_date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setExpiration_date(e.target.value);
                  }}
                  value={expiration_date}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="amount_credit_line"
                  label="Amount Credit Line"
                  name="amount_credit_line"
                  onChange={(e) => {
                    setAmount_credit_line(e.target.value);
                  }}
                  value={amount_credit_line}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="credit_line_from_bank"
                  label="Credit Line from Bank"
                  name="credit_line_from_bank"
                  onChange={(e) => {
                    setCredit_line_from_bank(e.target.value);
                  }}
                  value={credit_line_from_bank}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Date Credit Line"
                  value={date_credit_line}
                  onChange={(newValue) => {
                    setDate_credit_line(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="date"
                  id="date_of_notiization_of_contract"
                  label="Date of Notization of Contract"
                  name="date_of_notiization_of_contract"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setDate_of_notiization_of_contract(e.target.value);
                  }}
                  value={date_of_notiization_of_contract}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="book_no"
                  label="Book No."
                  name="book_no"
                  onChange={(e) => {
                    setBook_no(e.target.value);
                  }}
                  value={book_no}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="doc_no"
                  label="Doc No."
                  name="doc_no"
                  onChange={(e) => {
                    setDoc_no(e.target.value);
                  }}
                  value={doc_no}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="series_of"
                  label="Series of"
                  name="series_of"
                  onChange={(e) => {
                    setSeries_of(e.target.value);
                  }}
                  value={series_of}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="date"
                  id="date_issuance_of_notice_to_proceed"
                  label="Date Issuance of Notice to Proceed"
                  name="date_issuance_of_notice_to_proceed"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setDate_issuance_of_notice_to_proceed(e.target.value);
                  }}
                  value={date_issuance_of_notice_to_proceed}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="issued_by"
                  label="Issued by"
                  name="issued_by"
                  onChange={(e) => {
                    setIssued_by(e.target.value);
                  }}
                  value={issued_by}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="contract_amount"
                  label="Contract Amount"
                  name="contract_amount"
                  onChange={(e) => {
                    setContract_amount(e.target.value);
                  }}
                  value={contract_amount}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="revised_contract_amount"
                  label="Revised Contract Amount"
                  name="revised_contract_amount"
                  onChange={(e) => {
                    setRevised_contract_amount(e.target.value);
                  }}
                  value={revised_contract_amount}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="contract_duration"
                  label="Contract Duration"
                  name="contract_duration"
                  onChange={(e) => {
                    setContract_duration(e.target.value);
                  }}
                  value={contract_duration}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="revised_contract_time"
                  label="Revised Contact Time"
                  name="revised_contract_time"
                  onChange={(e) => {
                    setRevised_contract_time(e.target.value);
                  }}
                  value={revised_contract_time}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="time_suspension_extension"
                  label="Time Suspension Extension"
                  name="time_suspension_extension"
                  onChange={(e) => {
                    setTime_suspension_extension(e.target.value);
                  }}
                  value={time_suspension_extension}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="peo_project_engineer"
                  label="PEO Project Engineer"
                  name="peo_project_engineer"
                  onChange={(e) => {
                    setPeo_project_engineer(e.target.value);
                  }}
                  value={peo_project_engineer}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="contractors_project_engineer"
                  label="Contractors Project Engineer"
                  name="contractors_project_engineer"
                  onChange={(e) => {
                    setContractors_project_engineer(e.target.value);
                  }}
                  value={contractors_project_engineer}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  required
                  fullWidth
                  type="text"
                  id="materials_engineer"
                  label="Materials Engineer"
                  name="materials_engineer"
                  onChange={(e) => {
                    setMaterials_engineer(e.target.value);
                  }}
                  value={materials_engineer}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </LocalizationProvider>
    </Box>
  );
};

export default InfrastructureAddEdit;
