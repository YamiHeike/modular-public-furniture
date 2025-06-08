import FormFacadeEmbed from "@formfacade/embed-react";
import { useNavigate } from "react-router-dom";

export const FormPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/", { state: { fromFormSubmit: true } });
  };
  return (
    <div>
      <FormFacadeEmbed
        formFacadeURL="https://formfacade.com/include/104132573027960303334/form/1FAIpQLSe3CqePbuTsUssbzhgjZbHIhybt8mpiE6EXHPmW-C_wjwmNLg/classic.js/?div=ff-compose"
        onSubmitForm={handleSubmit}
      />
    </div>
  );
};
