import React, {useRef, useState} from 'react';
import {FormWrapper, ImgForm} from './style';
import {tmsFetch} from "../../store/saga/tmsFetch";

const AddPostPractic = () => {
        const formRef = useRef<HTMLFormElement>(null)
        const [imageSrc, setImageSrc] = useState('');

        const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
            e.preventDefault()
            if (formRef?.current) {
                console.log(new FormData(formRef.current))
                tmsFetch('https://studapi.teachmeskills.by/blog/posts/', {
                    method: 'POST',
                    body: new FormData(formRef.current),
                    // headers: {
                    //     Accept:"application/json"
                    // }
                })
                    .then(response => (response.json()))
                    .then(data => console.log(data))
            }
        }
        const handleInputValue = (e: any) => {
            const image = URL.createObjectURL(e.target.files[0])
            setImageSrc(image);
        };
        return (
            <>
                <form ref={formRef}>
                    <FormWrapper>
                        <input type="text" name="title" placeholder="title"/>
                        <input type="text" name="lesson_num" placeholder="lesson"/>
                        <input type="file" name="image" placeholder="image" accept="image/*" onChange={handleInputValue}/>
                        <input type="text" name="text" placeholder="description"/>
                        <input type="submit" onClick={handleSubmit}/>
                    </FormWrapper>
                </form>
                {imageSrc && (
                    <>
                        <ImgForm src={imageSrc}/>
                    </>
                )}
            </>
        );
    }
;

export default AddPostPractic;