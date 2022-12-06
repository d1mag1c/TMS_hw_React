import React, {useRef, useState} from 'react';
import {FormWrapper, ImgBlock, ImgForm, Input, InputButton, Title, WrapperBlock} from './style';
import {tmsFetch} from "../../store/saga/tmsFetch";
import {BlockHomePost} from '../pageSelected/style';
import {Link} from 'react-router-dom';

const AddPost = () => {
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
                <BlockHomePost>
                    <Link to='/'>Home</Link><p><span>|</span>add post</p>
                </BlockHomePost>
                <Title>Add post</Title>
                <WrapperBlock>
                    <FormWrapper>
                        <form ref={formRef}>

                            <Input type="text" name="title" placeholder="title"/>
                            <Input type="text" name="lesson_num" placeholder="lesson"/>
                            <Input type="file" name="image" placeholder="image" accept="image/*"
                                   onChange={handleInputValue}/>
                            <Input type="text" name="text" placeholder="description"/>
                            <InputButton type="submit" onClick={handleSubmit}/>

                        </form>
                    </FormWrapper>
                    <ImgBlock>
                        {imageSrc && <ImgForm src={imageSrc}/>}
                    </ImgBlock>
                </WrapperBlock>
            </>
        );
    }
;

export default AddPost;