import React from 'react';
import {Category} from "../utils/constants";
import {
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    InputGroup,
    InputGroupAddon,
    Col,
    Row,
    Container
} from 'reactstrap';

class ProductFilters extends React.Component {
    constructor() {
        super();
        this.state = {
            titleContains: '',
            descriptionContains: '',
            categoryIn: '',
            subCategoryIn: '',
            prodYearLte: '',
            prodYearGte: '',
            priceLte: '',
            priceGte: '',
            dropdownOpen: false,
            categoryText: '----',
        }
    }

    onTitleChange(e) {
        e.preventDefault();
        let titleContains = e.target.value;
        this.setState({titleContains})
    }

    onDescriptionChange(e) {
        e.preventDefault();
        let descriptionContains = e.target.value;
        this.setState({descriptionContains})
    }

    onCategoryChange(categoryIn, subCategoryIn, categoryText) {
        this.setState({categoryText, categoryIn, subCategoryIn})
    }

    onMinYearChange(e) {
        e.preventDefault();
        let prodYearLte = e.target.value;
        this.setState({prodYearLte})
    }

    onMaxYearChange(e) {
        e.preventDefault();
        let prodYearGte = e.target.value;
        this.setState({prodYearGte})
    }

    onMinPriceChange(e) {
        e.preventDefault();
        let priceLte = e.target.value;
        this.setState({priceLte})
    }

    onMaxPriceChange(e) {
        e.preventDefault();
        let priceGte = e.target.value;
        this.setState({priceGte})
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    search() {
        Object.keys(this.state).map(key => {
            if (key !== 'categoryText' && key !== 'dropdownOpen')
                this.props.changeFilters(key, this.state[key])
        })
    }

    render() {
        return (
            <div>
                <div className="search-panel">
                    <Container>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addontype="prepend">عنوان</InputGroupAddon>
                                    <Input onChange={(e) => this.onTitleChange(e)}/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addontype="prepend">توضیحات</InputGroupAddon>
                                    <Input onChange={(e) => this.onDescriptionChange(e)}/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="full-width">
                                    <InputGroupAddon addontype="prepend">دسته‌بندی</InputGroupAddon>
                                    <Dropdown isOpen={this.state.dropdownOpen}
                                              toggle={this.toggle.bind(this)}
                                    >
                                        <DropdownToggle caret>
                                            {this.state.categoryText}
                                        </DropdownToggle>

                                        <DropdownMenu className="scrollable-menu">
                                            <DropdownItem
                                                onClick={this.onCategoryChange.bind(this, '', '', '----')}>----</DropdownItem>

                                            {
                                                Object.keys(Category).map((category,key) =>
                                                    <div key={key}>
                                                        <DropdownItem header>{Category[category].value}</DropdownItem>

                                                        {
                                                            Object.keys(Category[category].sub).map(sub =>
                                                                <DropdownItem key={Category[category].sub[sub].key}
                                                                              onClick={this.onCategoryChange.bind(this, Category[category].key, Category[category].sub[sub].key, Category[category].sub[sub].value)}>
                                                                    {Category[category].sub[sub].value}
                                                                </DropdownItem>
                                                            )
                                                        }
                                                    </div>
                                                )

                                            }
                                        </DropdownMenu>
                                    </Dropdown>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addontype="prepend">از قیمت</InputGroupAddon>
                                    <Input type="number" id="price-from" onChange={(e) => this.onMaxPriceChange(e)}/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addontype="prepend">تا قیمت</InputGroupAddon>
                                    <Input type="number" id="price-to" onChange={(e) => this.onMinPriceChange(e)}/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addontype="prepend">از سال</InputGroupAddon>
                                    <Input type="number" id="date-from" onChange={(e) => this.onMaxYearChange(e)}/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addontype="prepend">تا سال</InputGroupAddon>
                                    <Input type="number" id="date-to" onChange={(e) => this.onMinYearChange(e)}/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Button
                                    color="primary"
                                    size="md"
                                    className="full-width"
                                    onClick={this.search.bind(this)}>
                                    جستجو

                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ProductFilters;
