import pandas as pd
from pandas_profiling import ProfileReport
from urllib.request import urlopen

# Read HTML content from the URL
url = 'https://majhinaukri.in/current-recruitment'
html_content = urlopen(url).read().decode('utf-8')

# Pandas profiling requires a DataFrame, so we need to extract data from the HTML
dfs = pd.read_html(html_content)

# Depending on the structure of the webpage, you may need to identify the correct DataFrame
# For example, if the data you need is in the first table, you can do:
data = dfs[0]

# Generate the profile report
profile = ProfileReport(data)

# Save the profile report to an HTML file
profile.to_file("majhinaukri.html")


