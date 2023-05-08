import React from "react";
class addItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      itemPrice: 0,
      itemBrand: "",
    };
  }
  render() {
    return (
      <form
        className="m-2 p-3  text-white bg-primary"
        onSubmit={(e) => { 
          e.preventDefault();
          this.props.addItemToList(
            this.state.itemName,
            this.state.itemPrice,
            this.state.itemBrand
          );
        }}
      >
        <h2 className="text-center">Add your item to the list</h2>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="itemName"
            onChange={(e) => {
              this.setState({ itemName: e.currentTarget.value });
            }}
            value={this.state.itemName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            name="itemPrice"
            className="form-control"
            id="inputPrice"
            onChange={(e) => {
              this.setState({ itemPrice: e.currentTarget.value });
            }}
            value={this.state.itemPrice}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputBrand" className="form-label">
            Brand
          </label>
          <input
            type="text"
            name="itemBrand"
            className="form-control"
            id="inputBrand"
            aria-describedby="Brand"
            onChange={(e) => {
              this.setState({ itemBrand: e.currentTarget.value });
            }}
            value={this.state.itemBrand}
          />
        </div>
        <div className="col text-center">
          <button
            type="submit"
            className="btn btn-dark col-4 mt-3 position-center"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default addItem;
