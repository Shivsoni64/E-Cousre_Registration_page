class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ' '};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name entered is :-' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th> <label htmlFor="name">Name :- </label></th>

                            <td>
                                <input type="text" id="name" value={this.state.value} onChange={this.handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <th colSpan="2">
                                <input type="submit" value="Submit"/>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
    
}

ReactDOM.render(<NameForm/>,document.getElementById('app'));