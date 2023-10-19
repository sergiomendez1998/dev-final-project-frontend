import PropTypes from "prop-types";
import { Card } from "flowbite-react";
import { convertToGeneralInfoSample } from "../../util/utilConvert";

export const GeneralInformation = ({ data }) => {

    const info = convertToGeneralInfoSample(data);

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