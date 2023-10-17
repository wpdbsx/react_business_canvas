
import * as yup from "yup";

export const resourceUrlValidation = yup.object({
    content: yup
        .string()
        .url('URL 형식 에러')

});
