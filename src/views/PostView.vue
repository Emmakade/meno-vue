<template>
    <main class="container my-4">
        <div class="row">
            <div class="col-md-8">
                <button class="btn btn-link text-secondary mb-4" @click="$router.go(-1)"
                    style="border: none; text-decoration: none;">
                    <i class="fas fa-arrow-left"></i> Back
                </button>

                <!-- Product Type Selection Buttons -->
                <div class="mb-3">
                    <label class="d-block mb-2 font-weight-bold">Product Type:</label>
                    <button class="btn btn-sm btn-secondary mr-2" id="btn-new" onclick="selectProductType('new')"
                        style="border: none;">New</button>
                    <button class="btn btn-sm btn-secondary" id="btn-old" onclick="selectProductType('old')"
                        style="border: none;">Old</button>
                    <input type="hidden" id="product-type" required>
                </div>

                <div class="row">
                    <div class="col-6 col-md-4 mb-4">
                        <div class="upload-box" onclick="triggerFileInput(0)">
                            <i class="fas fa-upload"></i>
                            <span>Click to upload</span>
                            <input type="file" id="file-input-0" class="d-none" onchange="handleFileUpload(0)">
                        </div>
                    </div>
                    <div class="col-6 col-md-4 mb-4">
                        <div class="upload-box" onclick="triggerFileInput(1)">
                            <i class="fas fa-upload"></i>
                            <span>Click to upload</span>
                            <input type="file" id="file-input-1" class="d-none" onchange="handleFileUpload(1)">
                        </div>
                    </div>
                    <div class="col-6 col-md-4 mb-4">
                        <div class="upload-box" onclick="triggerFileInput(2)">
                            <i class="fas fa-upload"></i>
                            <span>Click to upload</span>
                            <input type="file" id="file-input-2" class="d-none" onchange="handleFileUpload(2)">
                        </div>
                    </div>
                    <div class="col-6 col-md-4 mb-4">
                        <div class="upload-box" onclick="triggerFileInput(3)">
                            <i class="fas fa-upload"></i>
                            <span>Click to upload</span>
                            <input type="file" id="file-input-3" class="d-none" onchange="handleFileUpload(3)">
                        </div>
                    </div>
                    <div class="col-6 col-md-4 mb-4">
                        <div class="upload-box" onclick="triggerFileInput(4)">
                            <i class="fas fa-upload"></i>
                            <span>Click to upload</span>
                            <input type="file" id="file-input-4" class="d-none" onchange="handleFileUpload(4)">
                        </div>
                    </div>
                    <div class="col-6 col-md-4 mb-4">
                        <div class="upload-box" onclick="triggerFileInput(5)">
                            <i class="fas fa-upload"></i>
                            <span>Click to upload</span>
                            <input type="file" id="file-input-5" class="d-none" onchange="handleFileUpload(5)">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="section p-4 rounded-lg">
                    <h2 class="text-warning font-weight-bold mb-4">Please add at least one WhatsApp or Instagram contact
                        to your profile</h2>
                    <form id="post-form">
                        <div class="form-group">
                            <label for="item-name">Item Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="item-name"
                                placeholder="What would you like to give?" required>
                        </div>
                        <div class="form-group">
                            <label for="location">Location <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="location" placeholder="Where is this item?"
                                required>
                        </div>
                        <div class="form-group">
                            <label for="price">Price (optional)</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="price"
                                    placeholder="What is the price for this item?">
                                <div class="input-group-append">
                                    <select class="form-control">
                                        <option>₺</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="category">Category (optional)</label>
                            <select class="form-control" id="category">
                                <option>What kind of item is this?</option>
                            </select>
                        </div>

                        <!-- Add description section -->
                        <div class="form-group">
                            <button type="button" class="btn btn-link text-info" id="add-description-btn"
                                onclick="toggleDescription()">Add description <i
                                    class="fas fa-info-circle"></i></button>
                        </div>
                        <div class="form-group" id="description-input-group" style="display: none;">
                            <input type="text" class="form-control" id="description"
                                placeholder="Add a description for the item" required>
                            <button type="button" class="btn btn-success mt-2" onclick="validateDescription()">Add
                                Description</button>
                        </div>

                        <!-- Description preview section -->
                        <div id="description-preview" class="form-group" style="display: none;">
                            <label class="font-weight-bold">Description:</label>
                            <p id="description-text" class="text-muted" style="font-size: 0.875rem;"></p>
                        </div>

                        <!-- Contact info section -->
                        <div class="form-group text-secondary">
                            People will contact you via your preferred method of contact <a href="#"
                                class="text-info">Change</a>
                        </div>

                        <div class="form-group">
                            <label class="d-block font-weight-bold">Commission Status:</label>

                            <!-- Explanatory text -->
                            <small class="form-text text-muted mt-2">
                                By accepting the commission, you agree that the owner will receive a 15% commission on
                                the sale of your product. This is to cover site maintenance and provide better services
                                for users.
                            </small>

                            <div class="form-check form-check-inline mt-2">
                                <input type="checkbox" class="form-check-input" id="accept-commission"
                                    onclick="toggleCommission('accept')">
                                <label class="form-check-label text-success font-weight-bold"
                                    for="accept-commission">Accept Commission</label>
                            </div>
                        </div>

                        <!-- Post button (disabled by default) -->
                        <button type="submit" class="btn btn-primary btn-block" id="post-btn">Post</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
    body {
        font-family: 'Roboto', sans-serif;
    }
    .upload-box {
        border: none;
        background-color: #e7e7e7;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        color: #535353;
    }
    .upload-box i {
        font-size: 24px;
    }
    .upload-box span {
        display: block;
        margin-top: 10px;
    }
    .header-logo {
        height: 40px;
        width: 40px;
    }
    .user-avatar {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    .notification-badge {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #f00;
        color: #fff;
        font-size: 12px;
        border-radius: 50%;
        padding: 2px 5px;
    }

    body.dark-mode {
        background-color: #121212;
        color: #e0e0e0;
    }

    .dark-mode header,
    .dark-mode .border {
        background-color: #1e1e1e;
        border-color: #333;
    }

    .dark-mode .upload-box {
        border-color: #444;
        background-color: #222;
        color: #bbb;
    }

    .dark-mode .upload-box i {
        color: #ddd;
    }

    .dark-mode a {
        color: #90caf9;
    }

    .dark-mode a:hover {
        color: #64b5f6;
    }

    .dark-mode .btn {
        background-color: #333;
        border-color: #555;
        color: #fff;
    }

    .dark-mode .btn:hover {
        background-color: #444;
    }

    .dark-mode .form-control {
        background-color: #333;
        border-color: #555;
        color: #ddd;
    }

    .dark-mode .form-control::placeholder {
        color: #777;
    }

    .dark-mode .dropdown-menu {
        background-color: #222;
        border-color: #444;
    }

    .dark-mode .dropdown-item {
        color: #ddd;
    }

    .dark-mode .dropdown-item:hover {
        background-color: #333;
    }

    .dark-mode .section{
        background-color: #1f1f1f
    }

    .dark-mode footer {
        background-color: #1e1e1e;
        color: #bbb;
    }
    .dropdown-menu {
        display: none;
        position: absolute;
        left: -220px;
        background-color: white;
        border: 1px solid #ddd;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 1000;
    }
    .dropdown-menu.show {
        display: block;
    }
</style>
