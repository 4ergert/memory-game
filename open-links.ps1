$links = @(
    'https://docs.google.com/document/d/1TU8ElPQnolaDXyova8sQilILEXqZ7LX2HDePSYb12Kg/edit?tab=t.0'
    'https://www.figma.com/design/teDxq4ywNg46iqiWHpHQYM/Memory?node-id=46-2'
)

foreach ($link in $links) {
    Start-Process $link
}