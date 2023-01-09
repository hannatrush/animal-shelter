import { useForm } from "react-hook-form";

function FeedbackForm() {
    const {
        register,
        formState: { errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode:  "onBlur"
    });

    const onSubmit = () => {
        reset();
    }

    return (
        <form className="feedback" onSubmit={handleSubmit(onSubmit)}>
            <div className="user-info">
                <div className="input-field-wrapper">
                    <input 
                        className="user-field"
                        type="text"
                        placeholder="First Name*"
                        {...register('firstName', {
                            required: 'Required field!',
                            pattern: {
                                value: /^[ а-яА-Яa-zA-Z\-\’]+$/,
                                message: 'Invalid data.'
                            },
                            minLength: {
                                value: 2,
                                message: 'Less than 2 symbols!'
                            }
                    })} />
                    <div className="type-error">
                        {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
                    </div>
                </div>
                <div className="input-field-wrapper">
                    <input 
                        className="user-field" 
                        type="text" 
                        placeholder="Last Name*"
                        {...register('lastName', {
                            required: 'Required field!',
                            pattern: {
                                value: /^[ а-яА-Яa-zA-Z\-\’]+$/,
                                message: 'Invalid data.'
                            },
                            minLength: {
                                value: 2,
                                message: 'Less than 2 symbols!'
                            }
                    })} />
                    <div className="type-error">
                        {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
                    </div>
                </div>
            </div>
            <div className="input-field-wrapper">
                <input 
                    className="email-field" 
                    type="email" 
                    placeholder="Your Email*"
                    {...register('email', {
                    required: 'Required field!',
                    pattern: {
                        value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'Invalid email address.'}
                    })} 
                />
                <div className="type-error">
                    {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
                </div>
            </div>
            <div className="input-field-wrapper">
                <textarea 
                    className="message-field" 
                    placeholder="Message*"
                    {...register('userMessage', {
                        required: 'Required field!',
                    })}>   
                </textarea>
                <div className="type-error">
                    {errors?.userMessage && <p>{errors?.userMessage?.message || 'Error!'}</p>}
                </div>
            </div>
            <button className="message-button" type="submit" disabled={!isValid}>Send Message</button>
        </form> 
    )
}

export default FeedbackForm;