document.addEventListener("DOMContentLoaded", function () {
    const workflowItems = document.querySelectorAll(
        ".workflow_item:not(.w-condition-invisible)"
    );
    workflowItems.forEach((workflowItem, index) => {
        const workflowEyebrow = workflowItem.querySelector(".workflow_eyebrow");
        if (workflowEyebrow) {
            workflowEyebrow.textContent = `Stap ${index + 1}`;
        }
    });
});
