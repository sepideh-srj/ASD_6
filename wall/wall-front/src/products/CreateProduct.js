import React from 'react';
import {Button, Col, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import ProductCreateMutation from "../mutations/ProductCreateMutation";
import {Category} from '../utils/constants';

class CreateProduct extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            city: '',
            description: '',
            proYear: '',
            category: Category.PROPERTY.key,
            image: null,
            title_error: null,
            city_error: null,
            proYear_error: null,
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
                                    <Label for="city" sm={2}>شهر</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="city" id="city"
                                               valid={this.state.city_error == null ? undefined : false}
                                               placeholder="نویسنده"
                                               onChange={(e) => this.setState({
                                                   city: e.target.value,
                                                   city_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.city_error ? this.state.city_error[0] : ''}
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
                                    <Label for="proYear" sm={2}>سال تولید (شمسی)</Label>
                                    <Col sm={10}>
                                        <Input type="number" name="proYear" id="proYear"
                                               valid={this.state.proYear_error == null ? undefined : false}
                                               placeholder="سال انتشار"
                                               onChange={(e) => this.setState({
                                                   proYear: e.target.value,
                                                   proYear_error: null
                                               })}
                                        />
                                    </Col>
                                    <Col sm={2}/>
                                    <Col sm={10}>
                                        <FormFeedback>
                                            {this.state.proYear_error}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="category" sm={2}>دسته‌بندی</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="category" id="category"
                                               valid={this.state.category_error == null ? undefined : false}
                                               placeholder="ژانر"
                                               onChange={(e) => this.setState({
                                                   genre: e.target.value,
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
                                    <Label for="image" sm={2}>تصویر</Label>
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
        const {title, city, description, proYear, category, image} = this.state;
        ProductCreateMutation(title, city, description, proYear, category, image, (response) => {
            if (response.ok) {
                window.location.replace('/');
            }
            else
                this.setState({
                    title_error: response.errors.title,
                    city_error: response.errors.city,
                    proYear_error: response.errors.proYear,
                });
        })
    }

}

export default CreateProduct;
