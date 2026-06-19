import pandas as pd
import random

crops = {
    "Tomato": (15, 80),
    "Onion": (10, 60),
    "Potato": (8, 40),
    "Beans": (25, 100),
    "Rice": (30, 90),
    "Carrot": (20, 70),
    "Cabbage": (10, 50),
    "Cauliflower": (20, 70),
    "Brinjal": (15, 60),
    "GreenChilli": (30, 150),
    "Okra": (20, 80),
    "Cucumber": (10, 40),
    "Pumpkin": (15, 50),
    "Garlic": (80, 250),
    "Ginger": (50, 200),
    "BitterGourd": (30, 100)
}


data = []

for _ in range(5000):

    crop = random.choice(list(crops.keys()))

    month = random.randint(1, 12)

    min_price, max_price = crops[crop]


    # Seasonal variation
    season_factor = 1

    if month in [6, 7, 8]:
        season_factor = random.uniform(0.7, 0.9)

    elif month in [10, 11, 12]:
        season_factor = random.uniform(1.1, 1.4)


    previous_price = round(
        random.uniform(min_price, max_price)
        * season_factor, 2
    )


    # Market fluctuation
    current_price = round(
        previous_price *
        random.uniform(0.85, 1.20),
        2
    )


    # Next week trend
    trend = (
        current_price - previous_price
    ) * random.uniform(0.3, 0.8)


    next_week_price = round(
        current_price + trend,
        2
    )


    data.append([
        crop,
        month,
        previous_price,
        current_price,
        next_week_price
    ])


df = pd.DataFrame(
    data,
    columns=[
        "Crop",
        "Month",
        "Previous_Price",
        "Current_Price",
        "Next_Week_Price"
    ]
)


df.to_csv(
    "crop_prices.csv",
    index=False
)


print(
    "5000 records generated successfully!"
)