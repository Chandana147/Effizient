import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import {
  Autocomplete,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
const CustomizedSOPForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    age: "",
    highestEducation: "",
    institute: "",
    study: "",
    workExperience: "No",
    jobTitle: "",
    companyName: "",
    jobDuties: "",
    canadaInstitute: "",
    programOfStudy: "",
    applyingCountry: "",
    futureGoals: "",
    listeningScore: "",
    readingScore: "",
    speakingScore: "",
    writingScore: "",
    paidFirstYearTuition: "No",
    tuitionFee: "",
    didGIC: "No",
    gicAmount: "",
  });
  const handleClearForm = () => {
    const initialFormData = {
      email: "",
      fullName: "",
      age: "",
      highestEducation: "",
      institute: "",
      study: "",
      workExperience: "No",
      jobTitle: "",
      companyName: "",
      jobDuties: "",
      canadaInstitute: "",
      programOfStudy: "",
      applyingCountry: "",
      futureGoals: "",
      listeningScore: "",
      readingScore: "",
      speakingScore: "",
      writingScore: "",
      paidFirstYearTuition: "No",
      tuitionFee: "",
      didGIC: "No",
      gicAmount: "",
    };
  
    setFormData(initialFormData);
  };
  
  // Add a button or trigger event to clear the form
  <Button onClick={handleClearForm}>Clear Form</Button>
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleHighestEducationChange = (event, value) => {
    setFormData({ ...formData, highestEducation: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("https://sop-backend-aeue.onrender.com/user", {
        fullName: formData.fullName,
        email: formData.email,
        age: formData.age,
        highestEducation: formData.highestEducation,
        institute: formData.institute,
        study: formData.study,
        jobTitle: formData.jobTitle,
        companyName: formData.companyName,
        jobDuties: formData.jobDuties,
        canadaInstitute: formData.canadaInstitute,
        programOfStudy: formData.programOfStudy,
        applyingCountry: formData.applyingCountry,
        futureGoals: formData.futureGoals,
        listeningScore: formData.listeningScore,
        readingScore: formData.readingScore,
        speakingScore: formData.speakingScore,
        writingScore: formData.writingScore,
        paidFirstYearTuition: formData.paidFirstYearTuition,
        tuitionFee: formData.tuitionFee,
        didGIC: formData.didGIC,
        gicAmount: formData.gicAmount,
      })
      .then((response) => {
        if (response.data.code === 400) {
          alert("Email is already registered or something went wrong");
        } else {
          alert("Thank you for filling out the form");
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("Form data:", formData);
  };
  return (
    <Container>
      <Card style={{ marginBottom: "20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://lh6.googleusercontent.com/vHlmJXYwoJzkzWTJP1uGhFgY6sgJPIJCxl1tr5LufmBo8TvIU-EW8QLDYz6udujWDFqtNHbmn_0dVGc35tM--t4B5O2V17TC_BRV1DI6mX_3eYPzsxxIGXGBFgR0_hVQjw=w1020"
          />
        </CardActionArea>
      </Card>
      <Typography variant="h4" gutterBottom>
        Customized SOP Generator
      </Typography>
      <p className="text">
        Fill this questionnaire for the student. After submitting, you will
        receive an email at the email address that you have provided with a
        Statement of Purpose customized for you. You can use and modify that as
        per your needs. If you would like to get it edited, reviewed, or drafted
        by our experts, you can get in touch with us:{" "}
        <a href="https://effizient-immigration-inc.square.site/s/shop">Effizient Immigration Inc.</a>
      </p>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[
                  "Grade 12",
                  "Diploma",
                  "Bachelors Degree",
                  "Masters Degree",
                  "PhD",
                ]}
                onChange={handleHighestEducationChange} // Add onChange here
                value={formData.highestEducation}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Highest level of education" variant="outlined" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Institute where you completed your highest level of education *"
              variant="outlined"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="What did you study *"
              variant="outlined"
              name="study"
              value={formData.study}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Do you have any relevant work experience? *
              </FormLabel>
              <RadioGroup
                row
                aria-label="workExperience"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                required
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {formData.workExperience === "Yes" && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  variant="outlined"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  variant="outlined"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Job Duties"
                  variant="outlined"
                  name="jobDuties"
                  multiline
                  rows={4}
                  value={formData.jobDuties}
                  onChange={handleChange}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="What institute did you get admitted to in Canada? *"
              variant="outlined"
              name="canadaInstitute"
              value={formData.canadaInstitute}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="What is your program of study in Canada? *"
              variant="outlined"
              name="programOfStudy"
              value={formData.programOfStudy}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Which country are you applying from? *"
              variant="outlined"
              name="applyingCountry"
              value={formData.applyingCountry}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="What are your future goals? *"
              variant="outlined"
              name="futureGoals"
              multiline
              rows={4}
              value={formData.futureGoals}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="English Scores - Listening *"
              variant="outlined"
              name="listeningScore"
              value={formData.listeningScore}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="English Scores - Reading *"
              variant="outlined"
              name="readingScore"
              value={formData.readingScore}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="English Scores - Speaking *"
              variant="outlined"
              name="speakingScore"
              value={formData.speakingScore}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="English Scores - Writing *"
              variant="outlined"
              name="writingScore"
              value={formData.writingScore}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Did you pay your first year tuition? *
              </FormLabel>
              <RadioGroup
                row
                aria-label="paidFirstYearTuition"
                name="paidFirstYearTuition"
                value={formData.paidFirstYearTuition}
                onChange={handleChange}
                required
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {formData.paidFirstYearTuition === "Yes" && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="How much tuition fee did you pay? *"
                variant="outlined"
                name="tuitionFee"
                value={formData.tuitionFee}
                onChange={handleChange}
                required
              />
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Did you do a GIC? *</FormLabel>
              <RadioGroup
                row
                aria-label="didGIC"
                name="didGIC"
                value={formData.didGIC}
                onChange={handleChange}
                required
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {formData.didGIC === "Yes" && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="How much did you pay towards GIC? *"
                variant="outlined"
                name="gicAmount"
                value={formData.gicAmount}
                onChange={handleChange}
                required
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button onClick={handleClearForm}>Clear Form</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default CustomizedSOPForm;
