import React from 'react';
import {Form, FormGroup, Label, FormFeedback, Input, Button, Col} from 'reactstrap';
import ProductCreateMutation from "../mutations/ProductCreateMutation";
import {Category} from '../utils/constants';

class CreateProduct extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            address: '',
            description: '',
            prodYear: '',
            price: '',
            category: Category.DIGITAL_GOODS.key,
            image: null,
            title_error: null,
            address_error: null,
            prodYear_error: null,
            price_error: null,
            disabled: false
        };
        this.handle_image = this.handle_image.bind(this);
    }

    handle_image(e) {
        e.preventDefault();
        this.setState({disabled: true});
        let file = e.target.files[0];
        const url = '/upload/';
        const formData = new FormData();
        formData.append('file', file);
        fetch(url, {
            method: "POST",
            body: formData,
        }).then(response => response.json())
            .then((response) => {
                this.setState({disabled: false, image: response.url})
            });
    }

    render() {
        let logged_in = localStorage.getItem('logged');
        if (logged_in === 'false')
            window.location.replace('/');
        return (
            <div className="content container">
                <div className="row">

                    <div className="col col-md-9 order-md-1">
                        <div className="login-form-container">
                            <Form>
                                <FormGroup row>
                                    <Label for="title" sm={2}>عنوان</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="title" id="title"
                                               valid={this.state.title_error == null ? undefined : false}
                                               placeholder="عنوان"
                                               onChange={(e) => this.setState({
                                                   title: e.target.value,
                                                   title_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.title_error ? this.state.title_error[0] : ''}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="address" sm={2}>آدرس</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="address" id="address"
                                               valid={this.state.address_error == null ? undefined : false}
                                               placeholder="آدرس"
                                               onChange={(e) => this.setState({
                                                   address: e.target.value,
                                                   address_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.address_error ? this.state.address_error[0] : ''}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="description" sm={2}>توضیحات</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="description" id="description"
                                               placeholder="توضیحات"
                                               onChange={(e) => this.setState({
                                                   description: e.target.value,
                                               })}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="price" sm={2}>قیمت (تومان)</Label>
                                    <Col sm={10}>
                                        <Input type="number" name="price" id="price"
                                               valid={this.state.price_error == null ? undefined : false}
                                               placeholder="قیمت"
                                               onChange={(e) => this.setState({
                                                   price: e.target.value,
                                                   price_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.price_error}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="prodYear" sm={2}>سال تولید (شمسی)</Label>
                                    <Col sm={10}>
                                        <Input type="number" name="prodYear" id="prodYear"
                                               valid={this.state.prodYear_error == null ? undefined : false}
                                               placeholder="سال تولید"
                                               onChange={(e) => this.setState({
                                                   prodYear: e.target.value,
                                                   prodYear_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.prodYear_error}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="category" sm={2}>دسته‌بندی</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="category" id="category"
                                               valid={this.state.category_error == null ? undefined : false}
                                               placeholder="دسته‌بندی"
                                               onChange={(e) => this.setState({
                                                   category: e.target.value,
                                                   category_error: null
                                               })}
                                        >
                                            {
                                                Object.keys(Category).map(category =>
                                                    <option key={Category[category].key}
                                                        value={Category[category].key}>{Category[category].value}
                                                    </option>
                                                )

                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="image" sm={2}>تصویر محصول</Label>
                                    <Col sm={10}>
                                        <Label className="btn btn-primary">
                                            <input hidden type="file" name="image" id="image"
                                                   onChange={this.handle_image}
                                                   accept="image/*"
                                            />
                                            انتخاب عکس
                                        </Label>
                                    </Col>
                                </FormGroup>
                                <Button className="submit" outline color="primary"
                                        disabled={this.state.disabled}
                                        onClick={() => this._confirm()}>ثبت</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async _confirm() {
        const {title, address, description, prodYear, price, category, image} = this.state;
        ProductCreateMutation(title, address, description, prodYear, price, category, image, (response) => {
            if (response.ok) {
                window.location.replace('/');
            }
            else
                this.setState({
                    title_error: response.errors.title,
                    address_error: response.errors.address,
                    prodYear_error: response.errors.prodYear,
                    price_error: response.errors.price,
                });
        })
    }

}

export default CreateProduct;
