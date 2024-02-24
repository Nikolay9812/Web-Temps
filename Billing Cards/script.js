var invoices = [
    { name: "June 26,2021", price: '$25.00', data: "Invoice data for Invoice 1" },
    { name: "June 27,2021", price: '$25.00', data: "Invoice data for Invoice 2" },
    { name: "June 28,2021", price: '$25.00',  data: "Invoice data for Invoice 3" },
    { name: "June 29,2021", price: '$25.00',  data: "Invoice data for Invoice 4" },
    { name: "June 30,2021", price: '$25.00',  data: "Invoice data for Invoice 5" },
    { name: "August 02,2021", price: '$25.00',  data: "Invoice data for Invoice 6" },
    { name: "September 08,2021", price: '$25.00',  data: "Invoice data for Invoice 7" },
    { name: "December 09,2021", price: '$25.00',  data: "Invoice data for Invoice 8" },
    { name: "January 01,2022", price: '$25.00',  data: "Invoice data for Invoice 9" },
    { name: "February 28,2022", price: '$25.00',  data: "Invoice data for Invoice 10" }
    // Add more invoices as needed
];

var invoiceContainer = document.getElementById('invoicesList');
var toggleBtn = document.getElementById('toggleBtn');
var visibleCount = 5;
var showAll = false;

toggleBtn.addEventListener('click', function () {
    showAll = !showAll;
    if (showAll) {
        toggleBtn.textContent = 'Show less invoices';
        showInvoices(invoices.length);
    } else {
        toggleBtn.textContent = 'Show all invoices';
        showInvoices(visibleCount);
    }
});

function showInvoices(count) {
    invoiceContainer.innerHTML = '';
    for (var i = 0; i < count; i++) {
        var invoice = invoices[i];
        var div = document.createElement('div');
        div.className = 'invoice-item';
        div.dataset.invoice = invoice.name;
        div.innerHTML = '<span>' + invoice.name + '</span>' +
            '<span>' + invoice.price + '</span>' +
            '<a class="invoice-download-link" href="#" download="' + invoice.name.toLowerCase().replace(/\s+/g, '-') + '.txt">Download</a>';
        invoiceContainer.appendChild(div);
    }

    // Add event listeners to the newly created invoice items
    var newInvoiceItems = document.querySelectorAll('.invoice-item');
    newInvoiceItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all invoice items
            var allInvoiceItems = document.querySelectorAll('.invoice-item');
            allInvoiceItems.forEach(function (invoiceItem) {
                invoiceItem.classList.remove('active');
                invoiceItem.querySelector('.invoice-download-link').style.display = 'none';
            });

            // Add 'active' class to the clicked invoice item
            item.classList.add('active');
            item.querySelector('.invoice-download-link').style.display = 'inline-block';
        });

        item.querySelector('.invoice-download-link').addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the click event from bubbling up to the parent (invoice item)
        });
    });
}

// Initially show first 5 invoices
showInvoices(visibleCount);