import React, { useCallback, useEffect, useRef, useState } from "react";
import { TypedIcon } from "typed-design-system"
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';
import styled from "styled-components";
import { PATCH_POST, REMOVE_POST, SELECT_POST } from "../../reducers/resource";
import { resourceFormValidation } from "./yup";
import { RootState } from "../../reducers";
import { StyledDiv } from "../../styles/styles";
import { PostType } from "../../types/types";

interface FormValue {
    viewName: string;
}
const StyledMouseOverDiv = styled.div`
  float:right;
  margin-top:3px;
  cursor:pointer;
   &:hover {
        background-color: lightblue;
        color: darkblue;
    }
`

const StyledTextField = styled.textarea`
    width:236px;
    height:32px;
    font-family: Roboto;
    font-weight: 400;
    font-size:14px;
    line-height: 16.41px;
    padding:12px;
    resize: none;
    outline-color: #38A5E1;
    
`
const ResourceItem: React.FC<{ post: PostType }> = ({ post }) => {

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const textFieldRef = useRef<HTMLTextAreaElement>(null);
    const { selectedPost } = useSelector((state: RootState) => state.resource);
    const {
        control,
        getValues
    } = useForm<FormValue>({
        resolver: yupResolver(resourceFormValidation),
        mode: "onBlur",
        defaultValues: {
            viewName: post.viewName
        }
        //입력 필드가 포커스를 잃을 때 (blur) 입력 필드의 유효성 체크
    });

    useEffect(() => {
        try {
            if (editMode) {
                setCursorAtEnd();
            }
        } catch (e) {
            console.log(e)
        }

    }, [editMode]);

    const setCursorAtEnd = useCallback(() => {
        try {
            const viewNameSize = post.viewName.length

            textFieldRef?.current?.focus();
            textFieldRef?.current?.setSelectionRange(viewNameSize, viewNameSize)

        } catch (e) {
            console.log(e)
        }
    }, [])

    const handleEdit = useCallback(() => {
        try {
            setEditMode(true);
            setCursorAtEnd();
        } catch (e) {
            console.log(e)
        }
    }, [editMode])

    const handleRemove = useCallback(() => {
        try {
            dispatch({
                type: REMOVE_POST,
                postId: post.postId
            })
        } catch (e) {
            console.log(e)
        }
    }, [])

    const handleBlur = useCallback((e: any) => {
        try {

            const newContent = getValues("viewName");

            if (newContent !== undefined) {
                // 값이 변경되었다면  
                dispatch({ type: PATCH_POST, data: newContent, postId: post.postId });
            }
            setEditMode(false);
            //에디터 모드 종료
        } catch (e) {
            console.log(e)
        }
    }, [])

    const handleClick = useCallback(() => {
        try {
            if (!editMode && post.content !== selectedPost?.content) {
                dispatch({ type: SELECT_POST, post: post });
            }
        } catch (e) {
            console.log(e)
        }
    }, [editMode, selectedPost])

    return <div
        style={{
            width: "260px",
            height: "90px",
            backgroundColor: 'white',
            borderRadius: "10px",
            margin: "0px 10px 10px 10px",

        }}
    >
        {editMode ? <>
            <Controller
                name="viewName"
                control={control}
                render={({ field }) => {
                    return <>
                        <StyledTextField
                            {...field}
                            ref={textFieldRef}
                            onBlur={handleBlur}
                            // onFocus={handleFocus}
                            onClick={handleClick}
                        />
                    </>
                }
                }
            />

        </>
            :
            <StyledDiv $height="32px" $width="236px" onClick={handleClick} style={{ cursor: "pointer" }} >
                {post.viewName}
            </StyledDiv>
        }
        <StyledMouseOverDiv style={{ marginRight: "8px" }} onClick={handleRemove} >
            <TypedIcon icon="trash_19" size={19} />
        </StyledMouseOverDiv>
        <StyledMouseOverDiv style={{ marginRight: "12px" }} onClick={handleEdit}>
            <TypedIcon icon="edit_19" size={19} />
        </StyledMouseOverDiv>
    </div >
}

export default React.memo(ResourceItem); 