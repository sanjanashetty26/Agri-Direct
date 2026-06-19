import pandas as pd
import pickle

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import r2_score


# Load dataset
data = pd.read_csv("crop_prices.csv")


# Convert crop names to numbers
encoder = LabelEncoder()

data["Crop"] = encoder.fit_transform(data["Crop"])


# Input features
X = data[
    [
        "Crop",
        "Month",
        "Previous_Price",
        "Current_Price"
    ]
]


# Output
y = data["Next_Week_Price"]


# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)


# Random Forest model
model = RandomForestRegressor(
    n_estimators=200,
    max_depth=10,
    random_state=42
)


# Train model
model.fit(
    X_train,
    y_train
)


# Accuracy
prediction = model.predict(X_test)

score = r2_score(
    y_test,
    prediction
)


print(
    "Random Forest Accuracy:",
    score * 100,
    "%"
)


# Save model
pickle.dump(
    model,
    open(
        "crop_price_model.pkl",
        "wb"
    )
)


pickle.dump(
    encoder,
    open(
        "label_encoder.pkl",
        "wb"
    )
)


print(
    "Random Forest model saved successfully!"
)