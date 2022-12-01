import React, {useState} from 'react';
import {BlockHomePost} from "../pageSelected/style";
import {Link} from "react-router-dom";
import {BlockErrorButton, Button1, Button2, ButtonBlock, ButtonBlockError, InputBlock, Title, WrapperTextArea} from "./style";
import InputForm from "../header/login/registration/InputForm";
import {TextAreaComponent} from './textArea';

type Values = {
    title: string,
    lesson_num: string,
    date?: string,
    image: string,
    description?: string,
    text: string,
}

const AddPost = () => {

    const [value, setValue] = useState<Values>({
        title: '',
        lesson_num: '',
        image: '',
        text: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }


    const FormSubmit = () => {
        console.log(value)
    }

    
    return (
        <>
            <BlockHomePost>
                <Link to='/'>Home</Link><p><span>|</span>add post</p>
            </BlockHomePost>
            <Title>Add post</Title>
            <InputBlock>
                <InputForm
                    label={'Title'}
                    type={'text'}
                    name={'title'}
                    placeholder={'Add title'}
                    value={value.title}
                    error
                    onChange={handleChange}/>
                <InputForm
                    label={'Lesson num'}
                    type={'text'}
                    name={'lesson_num'}
                    placeholder={'Add lesson_num'}
                    value={value.lesson_num}
                    error
                    onChange={handleChange}/>
                {/*<InputForm*/}
                {/*    label={'Publish at'}*/}
                {/*    type={'date'}*/}
                {/*    name={'date'}*/}
                {/*    placeholder={'Add title'}*/}
                {/*    value={value.date}*/}
                {/*    error*/}
                {/*    onChange={handleChange}/>*/}
                <InputForm
                    label={'Image'}
                    type={'file'}
                    name={'image'}
                    placeholder={'Add image'}
                    value={value.image}
                    error
                    onChange={handleChange}/>
            </InputBlock>
            <WrapperTextArea>
                {/*<TextAreaComponent*/}
                {/*    label={'Description'}*/}
                {/*    name={'description'}*/}
                {/*    placeholder={'Add your text'}*/}
                {/*    value={value.description}*/}
                {/*    error*/}
                {/*    onChange={handleChangeTextArea}/>*/}
                <TextAreaComponent
                    label={'Text'}
                    name={'text'}
                    placeholder={'Add your text'}
                    value={value.text}
                    error
                    onChange={handleChangeTextArea}/>
            </WrapperTextArea>
            <BlockErrorButton>
                <ButtonBlockError>Delete post</ButtonBlockError>
                <ButtonBlock>
                    <Button1>Cancel</Button1>
                    <Button2 onClick={FormSubmit}>Add Post</Button2>
                </ButtonBlock>

            </BlockErrorButton>
        </>
    );
};

export default AddPost;