import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import { getGeneralInformationRequest } from "../../services/requestService";

export const GeneralInformation = ({ data }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const get = async () => {
      const response = await getGeneralInformationRequest(data.id);
      setInfo(response);
    };
    get();
  }, [data]);

  return (
    <article className="max-h-[55vh]">
      <Card>
        {Object.keys(info).map((key, idx) => (
          <li key={idx} className="text-start">
            <span className="font-bold">{key}: </span> {info[key]}
          </li>
        ))}
      </Card>
    </article>
  );
};

GeneralInformation.propTypes = {
  data: PropTypes.object.isRequired,
};
