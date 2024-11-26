from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html") #looks for the name of a file from the 'templates' file

if __name__ == "__main__":
    app.run(debug=True) #in PRODUCTION, set this to FALSE