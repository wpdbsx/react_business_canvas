
import * as yup from "yup";

export const resourceFormValidation = yup.object({
    content: yup
        .string()
        .required("컨텐츠를 입력해주세요.")

});
