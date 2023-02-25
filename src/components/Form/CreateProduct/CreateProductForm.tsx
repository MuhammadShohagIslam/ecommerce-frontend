import React from "react";
import { useForm } from "react-hook-form";
import Select, { OnChangeValue } from "react-select";
import makeAnimated from "react-select/animated";
import { ICategories } from "types/category.type";
import { ISubCategories } from "types/sub-category.type";
import FormGroup from "../FormGroup";
import ImageFileUploadForm from "../ImageFileUploadForm/ImageFileUploadForm";
import SelectInput from "../SelectInput";
import { IFormInput } from "./FormInput.types";

const animatedComponents = makeAnimated();

type CreateProductFormType = {
    handleAddProduct: any;
    handleChange: any;
    setLoading: any;
    handleChangeCategory: any;
    values: any;
    setValues: any;
    subCategories: ISubCategories[];
    isShow: boolean;
    loading: boolean;
};
const customStyles = {
    option: (provided: any, state: any) => ({
        ...provided,
        borderBottom: "1px solid transparent",
        color: state.isSelected ? "#fff" : "black",
    }),
};
const CreateProductForm = (props: CreateProductFormType) => {
    const {
        handleAddProduct,
        handleChange,
        handleChangeCategory,
        values,
        setValues,
        subCategories,
        isShow,
        loading,
        setLoading,
    } = props;
    const {
        title,
        description,
        price,
        quantity,
        colors,
        brands,
        categories,
        subCategory,
    } = values;
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<IFormInput>();
    console.log(values, loading, "loading");

    return (
        <form onSubmit={handleSubmit((data) => handleAddProduct(data, reset))} className="mt-5">
            <div className="grid grid-cols-2">
                <ImageFileUploadForm
                    values={values}
                    setValues={setValues}
                    setLoading={setLoading}
                    errorField={errors.productImg}
                    register={register}
                />
            </div>
            <div className="grid gap-6 mb-6 grid-cols-2">
                <div>
                    <FormGroup
                        register={register}
                        inputName={"productName"}
                        labelName={"Product Name"}
                        errorField={errors.productName}
                        inputType={"text"}
                        placeholder={"Enter Your Product Name"}
                        required="Product Title Is Required!"
                    />
                </div>

                <div>
                    <FormGroup
                        register={register}
                        inputName={"price"}
                        labelName={"Price"}
                        errorField={errors.price}
                        inputType={"number"}
                        placeholder={"Enter Your Product Price"}
                        required="Product Price Is Required!"
                    />
                </div>
                <div>
                    <FormGroup
                        register={register}
                        inputName={"discount"}
                        labelName={"Discount"}
                        errorField={errors.discount}
                        inputType={"number"}
                        placeholder={"Enter Your Product Discount"}
                        required="Product Price Discount Is Required!"
                    />
                </div>
                <div>
                    <FormGroup
                        register={register}
                        inputName={"quantity"}
                        labelName={"Quantity"}
                        errorField={errors.quantity}
                        inputType={"number"}
                        placeholder={"Enter Your Product Quantity"}
                        required="Product Price Quantity Is Required!"
                    />
                </div>
            </div>
            <div className="mb-6">
                <SelectInput
                    dataArray={categories}
                    labelName={"Product Category"}
                    inputName={"productCategory"}
                    register={register}
                    errorField={errors.productCategory}
                    required={{
                        required: "Product Category Is Required!",
                        onChange: (e: any) => handleChangeCategory(e),
                    }}
                />
            </div>
            {isShow && (
                <div className="mb-6">
                    <label
                        htmlFor="subCategory"
                        className="block mb-2 text-sm font-medium text-primary"
                    >
                        Sub Category
                    </label>
                    <Select
                        className="react-select-container bg-white border border-green-300 text-sm rounded-md block  text-black font-semibold"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={subCategories.map((sc) => {
                            const scObject = {
                                label: sc.name,
                                value: sc._id,
                            };
                            return scObject;
                        })}
                        value={subCategory}
                        onChange={(
                            newValue: OnChangeValue<
                                { label: string; value: string },
                                true
                            >
                        ) => setValues({ ...values, subCategory: newValue })}
                        classNamePrefix="react-select"
                        placeholder="Select Sub Category"
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25: "#d4d4d8",
                                primary: "#d4d4d8",
                            },
                        })}
                        styles={customStyles}
                    />
                </div>
            )}
            <div className="mb-6">
                <SelectInput
                    dataArray={brands}
                    labelName={"Brand"}
                    inputName={"brand"}
                    register={register}
                    errorField={errors.brand}
                    required={{
                        required: "Product Brand Is Required!",
                    }}
                />
            </div>
            <div className="mb-6">
                <SelectInput
                    dataArray={colors}
                    labelName={"Color"}
                    inputName={"color"}
                    register={register}
                    errorField={errors.color}
                    required={{
                        required: "Product Color Is Required!",
                    }}
                />
            </div>
            <div className="mb-6">
                <SelectInput
                    dataArray={["Yes", "No"]}
                    labelName={"Shipping"}
                    inputName={"shipping"}
                    register={register}
                    errorField={errors.shipping}
                    required={{
                        required: "Product Shipping Is Required!",
                    }}
                />
            </div>

            <div>
                <FormGroup
                    register={register}
                    inputName={"description"}
                    labelName={"Description"}
                    errorField={errors?.description}
                    placeholder={"Provide Product Description Here!"}
                    required="Product Product Description Is Required!"
                />
            </div>
            <button
                disabled={loading}
                type="submit"
                value="Add Product"
                className="btn hover:bg-transparent hover:text-primary text-white btn-primary disabled:opacity-75 disabled:border-2 disabled:border-primary disabled:text-primary mt-2"
            >
                {loading ? "Loading" : "Add Product"}
            </button>
        </form>
    );
};

export default CreateProductForm;