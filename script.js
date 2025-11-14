body {
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f0f2f5;
}

/* LOGIN */
#login-container {
    width: 320px;
    margin: 120px auto;
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

#login-container input {
    width: 90%;
    padding: 12px;
    margin: 10px 0;
    border-radius: 6px;
    border: 1px solid #ccc;
}

#login-container button {
    width: 95%;
    padding: 12px;
    background: #3a6cf4;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.hidden {
    display: none;
}

/* CRM */
header {
    background: #3a6cf4;
    color: #fff;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header button {
    background: #f0a500;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
}

.columns-container {
    display: flex;
    gap: 15px;
    padding: 20px;
    flex-wrap: wrap;
}

.column {
    background: #fff;
    border-radius: 12px;
    padding: 15px;
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
}

.column button {
    margin-bottom: 10px;
    padding: 8px;
    background: #3a6cf4;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.card-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card {
    background: #e8e8e8;
    border-radius: 8px;
    padding: 10px;
    cursor: grab;
    position: relative;
}

.card textarea {
    width: 100%;
    border: none;
    border-radius: 6px;
    padding: 6px;
    resize: none;
    font-size: 14px;
}

.card button.delete-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background: #e74c3c;
    color: #fff;
    border: none;
    padding: 3px 6px;
    border-radius: 4px;
    cursor: pointer;
}
