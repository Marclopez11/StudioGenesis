<x-app-layout>
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js'></script>



    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">

        <div class="card app-calendar-wrapper">
            <div class="row g-0">
                <!-- Calendar Sidebar -->
                <div class="col app-calendar-sidebar" id="app-calendar-sidebar">
                    <div class="border-bottom p-4 my-sm-0 mb-3">
                        <div class="d-grid">
                            <!--<button class="btn btn-primary btn-toggle-sidebar" data-bs-toggle="offcanvas"
                                data-bs-target="#addEventSidebar" aria-controls="addEventSidebar">
                                <i class="bx bx-plus me-1"></i>
                                <span class="align-middle">Add Event</span>
                            </button>-->
                        </div>
                        <h3>Total Productos Precio {{ $totalAmount }} €</h3>
                    </div>

                </div>
                <!-- /Calendar Sidebar -->

                <!-- Calendar & Modal -->

                <div class="container">
                    <br>
                    <form class="event-form pt-0" action="{{ route('agenda.save') }}" method="POST">
                        @csrf
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="eventTitle">Títol</label>
                                    <input type="text" class="form-control" id="eventTitle" name="eventTitle" placeholder="Títol" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="eventLabel">Producte</label>
                                    <select class="form-control" id="eventLabel" name="producte">
                                        @foreach ($productos as $producto)
                                            <option value="{{ $producto->id }}">{{ $producto->nombre }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="eventStartDate">Data d'inici</label>
                                    <input type="date" class="form-control" id="eventStartDate" name="eventStartDate">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="eventEndDate">Data de finalització</label>
                                    <input type="date" class="form-control" id="eventEndDate" name="eventEndDate">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="eventDescription">Quantitat</label>
                                    <input type="number" class="form-control" id="eventDescription" name="eventDescription" min="0">
                                </div>
                            </div>
                        </div>

                        <br>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </form>
                    <hr>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="calendar"></div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    </div>
    <!-- / Content -->






    <!-- END: Theme JS-->
    <!-- Pricing Modal JS-->
    <!-- END: Pricing Modal JS-->
    <!-- BEGIN: Page JS-->

    <script>
        $(document).ready(function() {
            var eventsFromPHP = @json($events);
            ShowCalendar(eventsFromPHP);
        });

        function ShowCalendar(eventsFromPHP) {
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: eventsFromPHP, // Usar los eventos pasados desde PHP
            });

            calendar.render();
        }

        $("#addEvent").on("click", function() {
            var newEvent = {
                title: $("#eventName").val(),
                start: $("#fromDate").val(),
                end: $("#toDate").val()
            };

            // Agregar el nuevo evento al array de eventos y refrescar el calendario
            calendar.addEvent(newEvent);
        });
    </script>



</x-app-layout>
