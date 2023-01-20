import React from 'react';
import { useForm } from 'react-hook-form';

import './volunteerForm.scss';

const VolunteerForm = ({ setOpenForm }) => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
        control
    } = useForm({
        mode: 'onBlur'
    });

    const  onSubmit= () => {
        reset();
    };

  return (
    <div className='modal-wrapper'>
        <div className="v-modal">
            <button className="close" onClick={ () => setOpenForm(false)}>
                <svg className="x" data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
            </button>
            <div className="volunteer-box">
                <h3>Become a volunteer</h3>
                <form className='volunteer-form' onSubmit={handleSubmit(onSubmit)} {...register}>
                    <div className="input-field-wrapper">
                        {/* <label className='label'>
                            <p>First Name*</p> */}
                            <input
                            className='form-field' 
                            type="text"  
                            placeholder='First Name*'
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
                        {/* </label> */}
                        <div className="type-error">
                            {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
                        </div>
                    </div>
                    <div className="input-field-wrapper">
                        {/* <label>
                            <p>Last Name*</p> */}
                            <input
                            className='form-field'
                            type="text"
                            placeholder='Last Name*'
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
                        {/* </label> */}
                        <div className="type-error">
                            {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
                        </div>
                    </div>
                    <div className="input-field-wrapper">
                        <input 
                            className='form-field'
                            placeholder='Age*'
                            {...register('age', {
                                required: 'Required field!',
                                min: {
                                    value: 18,
                                    message: 'You must be 18 or older!'
                                }
                            })}
                        />                        
                        <div className="type-error">
                            {errors?.age && <p>{errors?.age?.message || 'Error!'}</p>}
                        </div> 
                    </div>
                    <div className="input-field-wrapper">
                        {/* <label>
                            <p>Email*</p> */}
                            <input 
                            className='form-field'
                            type="email"  
                            placeholder='Email*'
                                {...register('email', {
                                    required: 'Required field!',
                                    pattern: {
                                        value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: 'Invalid email address.'}
                            })} />
                        {/* </label> */}
                        <div className="type-error">
                            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
                        </div>
                    </div>
                    <div className="checkboxes">
                        <div className="question">How would you like to help?</div>
                        <p className="checkItem">
                            <input type="checkbox" />
                            <span className='optionName'>playing with pets</span>
                        </p>
                        <p className="checkItem">
                            <input type="checkbox" />
                            <span className='optionName'>transportation</span>
                        </p>
                        <p className="checkItem">
                            <input type="checkbox" />
                            <span className='optionName'>Household work in the shelter</span>
                        </p>
                        <p className="checkItem">
                            <input type="checkbox" />
                            <span className='optionName'>photo/video shooting of animals or a shelter</span>
                        </p>
                        <p className="checkItem">
                            <input type="checkbox" />
                            <span className='optionName'>qualified vet help</span>
                        </p>
                        <p className="checkItem">
                            <input type="checkbox" />
                            <span className='optionName'>other</span>
                        </p>
                    </div>
                    <div className="checkboxes">
                        <div className="question">You consider yourself more...</div>
                        <p className="checkItem">
                            <input type="radio" name='chooseRadio'/>
                            <span className='optionName'>cat person</span>
                        </p>
                        <p className="checkItem">
                            <input type="radio" name='chooseRadio' />
                            <span className='optionName'>dog person</span>
                        </p>
                        <p className="checkItem">
                            <input type="radio" name='chooseRadio' value={''} />
                            <span className='optionName'>hard to tell</span>
                        </p>
                    </div>
                    <button className="btn-submit" type="submit" disabled={!isValid}>Submit</button>
                </form>
            </div>
        </div>
        <div className="back-drop" onClick={() => setOpenForm(false)} ></div>
    </div>            
  )
}

export default VolunteerForm;