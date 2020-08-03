import React from 'react';

export default class PortfolioForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.portfolio ? props.portfolio.description : '',
            note: props.portfolio ? props.portfolio.note : '',
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description) {
            this.setState(() => ({ error: 'Please provide project name.' }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Project Name"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <textarea
                        placeholder="Add a note for the project (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Project</button>
                </form>
            </div>
        );
    }
};