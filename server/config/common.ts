import * as joi from "joi";

const schema = joi.object({
    DB_CONNECTION_URL: joi.string().required().uri({
        scheme: ["mongodb"]
    }),
    PORT:joi
    .number()
    .required()
    .min(1)
    .max(65535)
});

const vars = {
    DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
    PORT: process.env.PORT
};

const { error, value } = joi.validate(vars, schema);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export default value as any;